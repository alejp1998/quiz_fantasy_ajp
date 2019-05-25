'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
        'upvotes',
        {
          userId: {
            type: Sequelize.INTEGER
          },
          quizId: {
            type: Sequelize.INTEGER
          },
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

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('upvotes');
  }
};
