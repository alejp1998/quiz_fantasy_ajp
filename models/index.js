const path = require('path');
const Sequelize = require('sequelize');

//Heroku Postgres DB or SQLite DB
const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";
const options = {logging: false};
const sequelize = new Sequelize(url, options);

// Import the definition of the Quiz Table from quiz.js
sequelize.import(path.join(__dirname, 'quiz'));

// Import the definition of the Users Table from user.js
sequelize.import(path.join(__dirname,'user'));

// Session
sequelize.import(path.join(__dirname,'session'));

//La inicializamos con las preguntas iniciales
sequelize.sync(); // Syncronize DB and seed if needed

module.exports = sequelize;