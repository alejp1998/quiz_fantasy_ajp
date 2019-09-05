var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js');
var statsController = require('../controllers/stats.js');
var userController = require('../controllers/user.js');
var sessionController = require('../controllers/session.js');


/*------- AUTOLOADS --------*/

/*Autoload for routes with param quizId*/
router.param('userId', userController.load);
router.param('quizId',quizController.load);

/*------- HOME ROUTES --------*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
//Redirecciona a la pagina desde la que se realizo la solicitud
router.get('/goback',(req,res,next) => {
    const url = req.session.backUrl || "/";
    delete req.session.backUrl;
    res.redirect(url);
});
//Guarda las rutas que no terminen en new,edit,play,session o un Id
router.get(['/','/author','/users','/users/:id(\\+d)/quizzes','/quizzes'], (req,res,next) => {
    req.session.backUrl = req.url;
    next();
});

/*------- QUIZZES ROUTES --------*/

/* GET own quizzes */
router.get('/users/:userId(\\d+)/quizzes', quizController.index);

/* GET quizzes */
router.get('/quizzes', quizController.index);
router.get('/quizzes/primero', quizController.primero);
router.get('/quizzes/segundo', quizController.segundo);
router.get('/quizzes/tercero', quizController.tercero);
router.get('/quizzes/cuarto', quizController.cuarto);
router.get('/quizzes/:subject(\\S+)',quizController.subjectTests);
router.get('/quizzes/:subject(\\S+)/:desc(\\S+)',sessionController.loginRequired,quizController.playTest);
router.get('/quizzes/:quizId(\\d+)/play',sessionController.loginRequired,quizController.playQuiz);
router.get('/quizzes/:quizId(\\d+)',sessionController.loginRequired,quizController.showQuiz);
router.get('/quizzes/:quizId(\\d+)/edit', sessionController.loginRequired, quizController.adminOrAuthorRequired,
    quizController.editQuiz);
router.get('/quizzes/new',sessionController.loginRequired, quizController.newQuiz);
/*PUT quizzes*/
router.put('/quizzes/:quizId(\\d+)',sessionController.loginRequired, quizController.adminOrAuthorRequired,
    quizController.updateQuiz);
router.put('/quizzes/randomplay',quizController.randomPlay);
router.put('/quizzes/randomcheck/:quizId(\\d+)', quizController.randomCheck);
router.put('/quizzes/:quizId(\\d+)/check',sessionController.loginRequired,quizController.checkQuiz);
/*POST quizzes*/
router.post('/quizzes',sessionController.loginRequired, quizController.addQuiz);
/*DELETE quizzes*/
router.delete('/quizzes/:quizId(\\d+)', quizController.adminOrAuthorRequired, quizController.deleteQuiz);

/*------- USERS ROUTES --------*/

/* GET Users */
router.get('/signup', (req,res,next) => {
    res.render('signup.ejs');
});
router.get('/login', (req,res,next) => {
    res.render('login.ejs');
});
router.get('/users', userController.index);
router.get('/check', userController.logIn);
router.get('/logout', userController.logOut);
router.get('/users/:userId(\\d+)',sessionController.loginRequired, userController.show);
router.get('/users/:userId(\\d+)/edit', sessionController.loginRequired, sessionController.adminOrMyselfRequired,
    userController.edit);
/* POST Users */
router.post('/signup', userController.newUser);
/* PUT USERS */
router.put('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminOrMyselfRequired,
    userController.update);
/* DELETE USERS */
router.delete('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminOrMyselfRequired,
    userController.destroy);

/*------- STATS ROUTES --------*/

/* GET Stats */
router.get('/stats', statsController.stats);
router.get('/userstats/:userId(\\d+)', sessionController.loginRequired , statsController.userstats);

/*------- CREDITS ROUTES --------*/

/*GET Credits*/
router.get('/credits',function(req, res, next) {
	res.render('credits.ejs');
});

module.exports = router;
