'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        title:'Todo 1',
        fullName: 'Arya',
        email: 'Aryaa@example.com',
        password: '123',
        gender: 'Male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Todo 2',
        fullName: 'Arya Suherman',
        email: 'Suherman@example.com',
        password: '1234',
        gender: 'Male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Todo 3',
        fullName: 'Muhammad Arya Suherman',
        email: 'Muhammad@example.com',
        password: '12345',
        gender: 'Male',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
