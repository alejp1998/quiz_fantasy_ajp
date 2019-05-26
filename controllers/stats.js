const Sequelize = require('sequelize');
const {models} = require("../models");
const Op = Sequelize.Op;
const paginate = require('../helpers/paginate').paginate;
var ssn;

const nUsers = async() => {
	return await models.user.count();
}
const nQuizzes = async() => {
	return await models.quiz.count();
}
const nTips = async() => {
	return await models.tip.count();
}

const getBestUsers = async() => {
	const bestOptions = {
		where: { points: {[Op.gt]: 5} }
	};

	await models.user.findAll(bestOptions)
	.then(users => {
		return users;
	});
};



// GET /stats
exports.stats = (req,res,next) => {
	let nusers,nquizzes,ntips;
	let bestUsers = [];
	
	nusers = nUsers();
	nquizzes = nQuizzes();
	ntips = nTips();

	bestusers = getBestUsers();

	return res.render('stats/stats.ejs', {nusers,nquizzes,ntips,bestUsers} );
};

// GET /userstats/:userId 
exports.userstats = (req,res,next) => {
	const userOptions = {
		include: [
			{model: models.quiz, as: 'quizzes'},
			{model: models.tip, as: 'tips'}
		]
	};

	models.user.findByPk(req.user.id,userOptions)
	.then(user => {
		return res.render('stats/userstats.ejs', {user} );
	});
};