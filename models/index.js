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

// Import the definition of the Tips Table from tip.js
sequelize.import(path.join(__dirname,'tip'));

// Session
sequelize.import(path.join(__dirname,'session'));

//Charge models
const {quiz,tip,user} = sequelize.models;

//Relationship between quizzes and user

//Authors
quiz.belongsTo(user, {as: 'author', foreignKey: 'authorId'});
user.hasMany(quiz, {as: 'quizzes', foreignKey: 'authorId'});

//Favorites
user.belongsToMany(quiz, {as: 'favoriteQuizzes', foreignKey: 'userId', through: 'favorites'});
quiz.belongsToMany(user, {as: 'fans', foreignKey: 'quizId',through: 'favorites'});

//Relationship between quizzes and tips
tip.belongsTo(quiz, {as: 'quiz', foreignKey: 'quizId'});
quiz.hasMany(tip,{as: 'tips', foreignKey: 'quizId'});

module.exports = sequelize;