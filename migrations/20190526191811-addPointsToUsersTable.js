'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'points', {
        type: Sequelize.INTEGER,
        default: 0
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'points');
  }
};
