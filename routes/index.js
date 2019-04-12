var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET quizzes */
router.get('/quizzes', quizController.index);
router.get('/quizzes/:quizId(\\d+)/play',quizController.playQuiz);
router.get('/quizzes/:quizId(\\d+)/check',quizController.checkQuiz);
router.get('quizzes/:quizId(\\d+)',quizController.showQuiz);
router.get('quizzes/:quizId(\\d+)/edit',quizController.editQuiz);
router.get('quizzes/new',quizController.newQuiz);

/*PUT quizzes*/
router.put('quizzes/:quizId(\\d+)',quizController.updateQuiz);
/*POST quizzes*/
router.put('quizzes/:quizId(\\d+)',quizController.addQuiz);
/*DELETE quizzes*/
router.delete('quizzes/:quizId(\\d+)',quizController.deleteQuiz);

/*GET Credits*/
router.get('/credits',function(req, res, next) {
	res.render('credits.ejs');
});

module.exports = router;