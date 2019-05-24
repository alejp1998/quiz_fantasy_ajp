'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('quizzes', [
      {
          question: 'Quiz1',
          answer: '1',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz2',
          answer: '2',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz3',
          answer: '3',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz4',
          answer: '4',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz5',
          answer: '5',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz6',
          answer: '6',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz7',
          answer: '7',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz8',
          answer: '8',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz9',
          answer: '9',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz10',
          answer: '10',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz11',
          answer: '11',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz12',
          answer: '12',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz13',
          answer: '13',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz14',
          answer: '14',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz15',
          answer: '15',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          question: 'Quiz16',
          answer: '16',
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
