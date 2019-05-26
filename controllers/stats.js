const Sequelize = require('sequelize');
const {models} = require("../models");
const Op = Sequelize.Op;
const paginate = require('../helpers/paginate').paginate;
var ssn;


// GET /stats
exports.stats = (req,res,next) => {
	//Numero de usuarios
	//Quizzes totales
	//Tips totales
	//Autores con mas aciertos
};

// GET /userstats/:userId 
exports.userstats = (req,res,next) => {
	//Aciertos y fallos
	//Quizzes creados
	//Tips creados
};