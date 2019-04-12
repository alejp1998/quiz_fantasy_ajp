const sequelize = require('../models/index.js');

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
			res.render(`El quiz ${req.params.quizId} no existe.`)
		}
		res.render('quizzes/play.ejs', {quiz} );
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
			res.render(`El quiz ${req.params.quizId} no existe.`)
		}
		if(quiz.answer.toLowerCase().trim()===answer.toLowerCase().trim()){
			result = "Correct";
		}else{
			result = "Incorrect";
		}
		res.render('quizzes/check.ejs', {quiz,result} );
	})
	.catch(error => next(error));
};

//GET /quizzes/:quizId/edit
exports.editQuiz = (req, res, next) => {

};

//GET /quizzes/:quizId
exports.showQuiz = (req, res, next) => {

};

//GET /quizzes/new
exports.newQuiz = (req, res, next) => {

};

//DELETE /quizzes/:quizId
exports.deleteQuiz = (req, res, next) => {
	const id = Number(req.params.quizId);
	sequelize.models.quiz.destroy( {where: {id} } )
	.then(quiz => res.redirect('/quizzes'))
	.catch(error => next(error));	
};

