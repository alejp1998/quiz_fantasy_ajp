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
        username: 'ale',
        password: bCrypt.hashSync('ale',10),
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'lucy',
        password: bCrypt.hashSync('lucy',10),
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'anthony',
        password: bCrypt.hashSync('anthony',10),
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'john',
        password: bCrypt.hashSync('john',10),
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'rudolph',
        password: bCrypt.hashSync('rudolph',10),
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'margaret',
        password: bCrypt.hashSync('margaret',10),
        createdAt: new Date(), updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
