var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js');
var userController = require('../controllers/user.js');

/*Autoload for routes with param quizId*/
router.param('quizId',quizController.load);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET quizzes */
router.get('/quizzes', quizController.index);
router.get('/quizzes/:quizId(\\d+)/play',quizController.playQuiz);
router.get('/quizzes/:quizId(\\d+)/check',quizController.checkQuiz);
router.get('/quizzes/:quizId(\\d+)',quizController.showQuiz);
router.get('/quizzes/:quizId(\\d+)/edit',quizController.editQuiz);
router.get('/quizzes/new',quizController.newQuiz);
router.get('/quizzes/randomplay',quizController.randomPlay);
router.get('/quizzes/randomcheck/:quizId(\\d+)',quizController.randomCheck);
/*PUT quizzes*/
router.put('/quizzes/:quizId(\\d+)',quizController.updateQuiz);
/*POST quizzes*/
router.post('/quizzes',quizController.addQuiz);
/*DELETE quizzes*/
router.delete('/quizzes/:quizId(\\d+)',quizController.deleteQuiz);

/* GET Users */
router.get('/signup', (req,res,next) => {
    res.render('signup.ejs');
});
router.get('/signin', (req,res,next) => {
    res.render('signin.ejs');
});

/* POST Users */
router.post('/signup', userController.newUser);
router.post('/signin', userController.logIn);


/*GET Credits*/
router.get('/credits',function(req, res, next) {
	res.render('credits.ejs');
});

module.exports = router;