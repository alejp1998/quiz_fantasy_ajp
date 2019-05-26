'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'fails', {
        type: Sequelize.INTEGER,
        default: 0
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'fails');
  }
};
