var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz.js');
var tipController = require('../controllers/tip.js');
var upvoteController = require('../controllers/upvote.js');
var statsController = require('../controllers/stats.js');
var userController = require('../controllers/user.js');
var sessionController = require('../controllers/session.js');


/*------- AUTOLOADS --------*/

/*Autoload for routes with param quizId*/
router.param('userId', userController.load);
router.param('quizId',quizController.load);
router.param('tipId',tipController.load);

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
router.put('/users/:userId(\\d+)/follow', sessionController.loginRequired, userController.follow);
/* DELETE USERS */
router.delete('/users/:userId(\\d+)', sessionController.loginRequired, sessionController.adminOrMyselfRequired,
    userController.destroy);
router.delete('/users/:userId(\\d+)/unfollow', sessionController.loginRequired, userController.unfollow);

/*------- TIPS ROUTES --------*/

/* GET Tips */
router.get('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)/edit', sessionController.loginRequired ,
	tipController.adminOrAuthorRequired , tipController.edit);
/* POST Tips */
router.post('/quizzes/:quizId(\\d+)/tips', sessionController.loginRequired , tipController.create);
/* PUT Tips */
router.put('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)', sessionController.loginRequired , 
	tipController.adminOrAuthorRequired ,tipController.update);
router.put('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)/accept', sessionController.loginRequired,
    tipController.adminOrAuthorRequired, tipController.accept);
/* DELETE TIPS */
router.delete('/quizzes/:quizId(\\d+)/tips/:tipId', sessionController.loginRequired , 
	tipController.adminOrAuthorRequired, );
router.delete('/quizzes/:quizId(\\d+)/tips/:tipId(\\d+)', sessionController.loginRequired,
    tipController.adminOrAuthorRequired, tipController.destroy);

/*------- UPVOTES ROUTES --------*/

/* PUT Upvotes */
router.put('/users/:userId(\\d+)/favs/:quizId(\\d+)', sessionController.loginRequired , 
    sessionController.adminOrMyselfRequired , upvoteController.add);
router.delete('/users/:userId(\\d+)/favs/:quizId(\\d+)', sessionController.loginRequired, 
    sessionController.adminOrMyselfRequired , upvoteController.quit);

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