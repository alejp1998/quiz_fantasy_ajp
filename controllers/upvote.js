const Sequelize = require('sequelize');
const {models} = require("../models");
var ssn;

//Sumar un upvote al total y añadirse como fan
exports.add = (req,res,next) => {
	let {quiz,user} = req;

	quiz.addFan(user)
	.then(() => {
		if(req.xhr){
			res.sendStatus(200);
		}else{
			res.sendStatus(415);
		}
	})
	.catch(error => {
		console.log(error);
		res.sendStatus(500);
	});
};

//Restar un upvote al total y dejar de ser fan
exports.quit = (req,res,next) => {
	let {quiz,user} = req;

	quiz.removeFan(user)
	.then(() => {
		if(req.xhr){
			res.sendStatus(200);
		}else{
			res.sendStatus(415);
		}
	})
	.catch(error => {
		console.log(error);
		res.sendStatus(500);
	});
};