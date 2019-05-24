'use strict';
var bCrypt = require('bcrypt');

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        password: bCrypt.hashSync('admin',10),
        isAdmin: true,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'alejp1998',
        password: bCrypt.hashSync('Ale.757779',10),
        createdAt: new Date(), updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
