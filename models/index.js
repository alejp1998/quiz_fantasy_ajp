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


// Relation 1-to-N between User and Quiz:
user.hasMany(quiz, {foreignKey: 'authorId'});
quiz.belongsTo(user, {as: 'author', foreignKey: 'authorId'});

//Favorites
user.belongsToMany(quiz, {as: 'upvoted', foreignKey: 'userId', through: 'upvotes', otherKey: 'quizId'});
quiz.belongsToMany(user, {as: 'fans', foreignKey: 'quizId',through: 'upvotes', otherKey: 'userId'});

//Relationship between quizzes and tips
tip.belongsTo(quiz);
quiz.hasMany(tip);

// Relation 1-to-N between User and Tips:
user.hasMany(tip, {foreignKey: 'authorId'});
tip.belongsTo(user, {as: 'author', foreignKey: 'authorId'});

//Followers & following
user.belongsToMany(user, {as: 'followedBy',foreignKey: 'followerId',through: 'followers',otherKey:'followingId'});
user.belongsToMany(user, {as: 'following',foreignKey: 'followingId',through: 'followers',otherKey:'followerId'});

module.exports = sequelize;