'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('users', 'points', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('users', 'fails', {
        type: Sequelize.STRING,
      })
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('users', 'points'),
      queryInterface.removeColumn('users', 'fails')
    ];
  }
};
