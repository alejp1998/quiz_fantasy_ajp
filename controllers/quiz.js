const Sequelize = require('sequelize');
const {models} = require("../models");
const Op = Sequelize.Op;
const paginate = require('../helpers/paginate').paginate;
var ssn;


//Autoload quiz asociado a :quizId
exports.load = (req, res, next, quizId) => {
	
    const options = {
        include: [
            {
                model: models.tip,
                include: [{model: models.user, as: 'author'}]
            },
            {model: models.user, as: 'author'}
        ]
    };

    models.quiz.findByPk(quizId, options)
    .then(quiz => {
        if (quiz) {
            req.quiz = quiz;
            next();
        } else {
            throw new Error('There is no quiz with id=' + quizId);
        }
    })
    .catch(error => next(error));
};

// GET /quizzes
exports.index = (req, res, next) => {

	let countOptions = {};

	//Search quizzes
	const search = req.query.search || '';
	if(search){
		//Normalizamos texto sustituyendo los blancos por %
		const search_like = "%" + search.replace(/ +/g,"%") + "%";
		//Creamos la expresion de la busqueda 
		countOptions.where = {question: { [Op.like]: search_like}};
	}

	//Si no hemos buscado nada, muestra todos los quizzes
    models.quiz.count(countOptions)
    .then(count => {
    	//Pagination
		const page_items = 5;
		//The page shown is in the query
		const pageno = Number(req.query.pageno) || 1;
		//Create String with HTML to render pagination buttons
		res.locals.paginate_control = paginate(count, page_items, pageno, req.url);

		const findOptions = {
			...countOptions,
			offset: page_items*(pageno-1),
			limit: page_items
		};

		return models.quiz.findAll(findOptions);
    }).then(quizzes => {
    	res.render('quizzes/index.ejs',{quizzes,search});
	})
    .catch(error => next(error));
};

//GET /quizzes/:quizId/play
exports.playQuiz = (req, res, next) => {
	const quiz = req.quiz;
	if(!quiz){
		res.render(`El quiz ${req.params.quizId} no existe.`);
	}else{
		res.render('quizzes/play.ejs', {quiz} );
	}
};

//GET /quizzes/:quizId/check
exports.checkQuiz = (req, res, next) => {
	let result;
	const quiz = req.quiz;
	const answer = req.query.answer;
	if(!quiz){
		return res.render(`El quiz ${req.params.quizId} no existe.`);
	}
	if(quiz.answer.toLowerCase().trim()===answer.toLowerCase().trim()){
		result = "Correct";
	}else{
		result = "Incorrect";
	}
	return res.render('quizzes/check.ejs', {quiz,result} );
};

//GET /quizzes/:quizId/edit
exports.editQuiz = (req, res, next) => {
	const quiz = req.quiz;
	if(!quiz){
		res.render(`El quiz ${req.params.quizId} no existe.`);
	}else{
		res.render('quizzes/edit.ejs', {quiz} );
	}
};

//PUT /quizzes/:quizId
exports.updateQuiz = (req, res, next) => {
	const id = req.quiz.id;
	var quiz = req.body;
	quiz.id = id;

	models.quiz.update( quiz, { where: {id} } )
	.then(() => {
		req.flash('success','Quiz updated succesfully');
		res.redirect('/quizzes');
	}).catch(Sequelize.ValidationError, error => {
		req.flash('error','There are errors in the form:');
		error.errors.forEach(({message}) => req.flash('error',message));
		res.render('quizzes/edit',{quiz});
	}).catch(error => {
		req.flash('error','Error updating the quiz: '+error.message);
		next(error);
	});
};

//GET /quizzes/:quizId
exports.showQuiz = (req, res, next) => {
	const quiz = req.quiz;
	if(!quiz){
		res.render(`El quiz ${req.params.quizId} no existe.`);
	}else{
		res.render('quizzes/show.ejs', {quiz} );
	}
};

//GET /quizzes/new
exports.newQuiz = (req, res, next) => {
	const quiz = {question: '',answer: ''};
	res.render('quizzes/new.ejs',{quiz});
};

//POST /quizzes/
exports.addQuiz = (req, res, next) => {
	const quiz = req.body;

	models.quiz.create(quiz)
		.then(() => {
			req.flash('success', 'Quiz added succesfully');
			res.redirect('/quizzes');
		})
		.catch(Sequelize.ValidationError, error => {
			req.flash('error', 'There are errors in the form:');
			error.errors.forEach(({message}) => req.flash('error', message));
			res.render('quizzes/new', {quiz});
		})
		.catch(error => {
			req.flash('error', 'Error adding the Quiz: ' + error.message);
			next(error);
		});
};


//DELETE /quizzes/:quizId
exports.deleteQuiz = (req, res, next) => {
	const quiz = req.quiz;
	quiz.destroy()
	.then(() => {
		req.flash('success', 'Quiz deleted successfully.');
		res.redirect('/quizzes');
	})
	.catch(error => {
		req.flash('error', 'Error deleting the Quiz: ' + error.message);
		next(error);
	});
};

//GET /quizzes/randomplay
exports.randomPlay = (req,res,next) => {
	ssn = req.session;
	ssn.score = ssn.score || 0;
	if(!ssn.score){
		ssn.randomPlay = [];
	}
	models.quiz.findOne({
		where: {id: {[Op.notIn]: ssn.randomPlay}},
		order: [Sequelize.fn( 'RANDOM' ),]
	})
		.then(quiz => {
			const score = ssn.score;
			if(!quiz){
				return res.render('quizzes/random_nomore.ejs', {score});
			}else{
				return res.render('quizzes/random_play.ejs', {quiz,score} );
			}
		})
		.catch(error => {
			req.flash('error', 'Error asking next question: ' + error.message);
			next(error);
		});
};

//GET /quizzes/randomcheck/:quizId
exports.randomCheck = (req, res, next) => {
	ssn = req.session;
	const answer = req.query.answer;
	const quiz = req.quiz;

	let result = false;

	if(answer.toLowerCase().trim()===quiz.answer.toLowerCase().trim()){
		result = true;
		ssn.score++;
		ssn.randomPlay.push(quiz.id);
	}

	const score = ssn.score;
	if(!result){
		ssn.score = 0;
	}
	res.render('quizzes/random_result.ejs', {result,score,answer} );
};


