const Sequelize = require('sequelize');
const {models} = require("../models");
const Op = Sequelize.Op;
var ssn;

//Autoload quiz asociado a :quizId
exports.load = (req, res, next, quizId) => {
	const quiz = models.quiz.findByPk(Number(quizId))
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
    models.quiz.findAll()
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

	models.quiz.update( {question,answer}, { where: {id} } )
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

	models.quiz.create({question, answer})
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
exports.randomPlay = (req,res,next) => {
	ssn = req.session;
	const score = ssn.score || 0;
	if(score === 0){
		ssn.randomPlay = [];
	}
	models.quiz.findOne({
		where: {id: {[Op.notIn]: ssn.randomPlay}},
		order: [Sequelize.fn( 'RANDOM' ),]
	})
		.then(quiz => {
			if(!quiz){
				ssn.score = 0;
				return res.render('quizzes/random_nomore.ejs', {score});
			}else{
				return res.render('quizzes/random_play.ejs', {quiz,score} );
			}
		})
		.catch(error => {
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
	res.render('quizzes/random_result.ejs', {result,score,answer} );
};


