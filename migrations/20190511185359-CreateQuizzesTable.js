'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
        'quizzes',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
          },
          course: {
            type: Sequelize.INTEGER,
            defaultValue: false
          },
          subject: {
              type: Sequelize.STRING,
              validate: {notEmpty: {msg: "Subject must not be empty"}}
          },
          desc: {
              type: Sequelize.STRING,
              validate: {notEmpty: {msg: "Description must not be empty"}}
          },
          question: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Question must not be empty."}}
          },
          answer: {
            type: Sequelize.INTEGER,
            validate: {notEmpty: {msg: "Answer must not be empty."}}
          },
          answer1: Sequelize.STRING,
          answer2: Sequelize.STRING,
          answer3: Sequelize.STRING,
          answer4: Sequelize.STRING,
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
        },
        {
          sync: {force: true}
        }
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('quizzes');
  }
};
