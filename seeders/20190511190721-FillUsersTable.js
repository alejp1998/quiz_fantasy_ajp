'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        password: 'admin',
        isAdmin: true,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        username: 'alejp1998',
        password: 'Ale.757779',
        createdAt: new Date(), updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
