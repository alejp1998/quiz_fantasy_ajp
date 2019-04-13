const sequelize = require('../models/index.js');

//Autoload quiz asociado a :quizId
exports.load = (req, res, next, quizId) => {
	const quiz = sequelize.models.quiz.findByPk(Number(quizId))
		.then(quiz => {
			if(quiz){
				req.quiz = quiz;
				next();
			}else{
				throw new Error('No quiz with id: '+ quizId);
			}
		})
		.catch(error => next(error));
};

// GET /quizzes
exports.index = (req, res, next) => {
    sequelize.models.quiz.findAll()
    .then(quizzes => {
        res.render('quizzes/index.ejs', {quizzes} );
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
	}ext();
};

//PUT /quizzes/:quizId
exports.updateQuiz = (req, res, next) => {
	const id = req.quiz.id;
	const {question,answer} = req.body;

	sequelize.models.quiz.update( {question,answer}, { where: {id} } )
	.then(() => res.redirect('/quizzes'))
	.catch(error => next(error));
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
	res.render('quizzes/new.ejs');
};

//POST /quizzes/
exports.addQuiz = (req, res, next) => {
	const {question, answer} = req.body;

	sequelize.models.quiz.create({question, answer})
		.then(() => res.redirect('/quizzes'))
		.catch(next);
};


//DELETE /quizzes/:quizId
exports.deleteQuiz = (req, res, next) => {
	const quiz = req.quiz;
	quiz.destroy()
	.then(() => res.redirect('/quizzes'))
	.catch(error => next(error));	
};

//GET /quizzes/randomplay
/*exports.randomPlay = (req, res, next) => {
	let i=0;
	let id=0;
	let quiz;
	let score;
	async function getAllIds() {
		let quizzes = await sequelize.models.quiz.findAll()
			.each(quiz=>{
				req.session.randomPlay[i] = quiz.id;
				i++;
			});
	};

	if(req.session.randomPlay.length === 0){
		req.session.score=0;
		req.session.randomPlay = [];
		getAllIds();
	}

	id = Math.floor(Math.random()*(ids.length));
	sequelize.models.quiz.findByPk(ids[id])
		.then(quiz=> {
			score = req.session.score;
			return res.render('/quizzes/randomplay', {quiz,score} );
		})
		.catch(error => next(error));
};*/


