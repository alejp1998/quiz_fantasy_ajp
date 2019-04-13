const sequelize = require('../models/index.js');

//Autoload quiz asociado a :quizId
exports.load = (req, res, next, quizId) => {
	const quiz = models.quiz.findByPk(Number(quizId));
	if(quiz){
		req.quiz = quiz;
		next();
	}else{
		throw new Error('No quiz with id: '+ quizId);
	}
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
	const id = Number(req.params.quizId);
	sequelize.models.quiz.findByPk(id)
	.then(quiz => {
		if(!quiz){
			res.render(`El quiz ${req.params.quizId} no existe.`);
		}else{
			res.render('quizzes/play.ejs', {quiz} );
		}
	})
	.catch(error => next(error));
};

//GET /quizzes/:quizId/check
exports.checkQuiz = (req, res, next) => {
	let result;
	const id = Number(req.params.quizId);
	const answer = req.query.answer;
	sequelize.models.quiz.findByPk(id)
	.then(quiz => {
		if(!quiz){
			return res.render(`El quiz ${req.params.quizId} no existe.`);
		}
		if(quiz.answer.toLowerCase().trim()===answer.toLowerCase().trim()){
			result = "Correct";
		}else{
			result = "Incorrect";
		}
		return res.render('quizzes/check.ejs', {quiz,result} );
	})
	.catch(error => next(error));
};

//GET /quizzes/:quizId/edit
exports.editQuiz = (req, res, next) => {
	const id = Number(req.params.quizId);

	sequelize.models.quiz.findByPk(id)
	.then(quiz => {
		if(!quiz){
			res.render(`El quiz ${req.params.quizId} no existe.`);
		}else{
			res.render('quizzes/edit.ejs', {quiz} );
		}
	})
	.catch(error => next(error));
};

//GET /quizzes/:quizId/check
exports.updateQuiz = (req, res, next) => {
	const id = Number(req.params.quizId);
	const {question,answer} = req.body;

	sequelize.models.quiz.update( {question,answer}, { where: {id} } )
	.then(() => res.redirect('/quizzes'))
	.catch(error => next(error));
};

//GET /quizzes/:quizId
exports.showQuiz = (req, res, next) => {
	const id = Number(req.params.quizId);

	sequelize.models.quiz.findByPk(id)
	.then(quiz => {
		if(!quiz){
			res.render(`El quiz ${req.params.quizId} no existe.`);
		}else{
			res.render('quizzes/show.ejs', {quiz} );
		}
	})
	.catch(error => next(error));
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
	const id = Number(req.params.quizId);
	sequelize.models.quiz.destroy( {where: {id} } )
	.then(() => res.redirect('/quizzes'))
	.catch(error => next(error));	
};

