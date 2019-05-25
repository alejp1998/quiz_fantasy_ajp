'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
      return queryInterface.createTable(
          'followers',
          {
              followerId: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  unique: "compositeKey",
                  allowNull: false
              },
              followingId: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  unique: "compositeKey",
                  allowNull: false,
              }
          },
          {
              sync: {force: true},
              timestamps: false
          }
      );
  },

  down(queryInterface, Sequelize) {
      return queryInterface.dropTable('followers');
  }
};
