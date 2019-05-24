var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js');
var userController = require('../controllers/user.js');
var sessionController = require('../controllers/session.js');

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
router.get('/quizzes/:quizId(\\d+)/edit',sessionController.loginRequired, quizController.editQuiz);
router.get('/quizzes/new',sessionController.loginRequired, quizController.newQuiz);
router.get('/quizzes/randomplay',quizController.randomPlay);
router.get('/quizzes/randomcheck/:quizId(\\d+)', quizController.randomCheck);
/*PUT quizzes*/
router.put('/quizzes/:quizId(\\d+)',sessionController.loginRequired, quizController.updateQuiz);
/*POST quizzes*/
router.post('/quizzes',sessionController.loginRequired, quizController.addQuiz);
/*DELETE quizzes*/
router.delete('/quizzes/:quizId(\\d+)',sessionController.adminRequired, quizController.deleteQuiz);

/* GET Users */
router.get('/signup', (req,res,next) => {
    res.render('signup.ejs');
});
router.get('/login', (req,res,next) => {
    res.render('login.ejs');
});
router.get('/check', userController.logIn);
router.get('/logout', userController.logOut);
/* POST Users */
router.post('/signup', userController.newUser);


/*GET Credits*/
router.get('/credits',function(req, res, next) {
	res.render('credits.ejs');
});

module.exports = router;