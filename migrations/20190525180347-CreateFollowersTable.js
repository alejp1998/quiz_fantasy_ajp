'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
      return queryInterface.createTable(
          'followers',
          {
              followerId: {
                  type: Sequelize.INTEGER,
                  allowNull: false
              },
              followingId: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
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

  down(queryInterface, Sequelize) {
      return queryInterface.dropTable('followers');
  }
};
