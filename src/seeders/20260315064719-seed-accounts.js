'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accounts', [
      {
        email: 'admin123@gmail.com',
        password: 'admin123', // In a real application, passwords should be hashed
        role_id: 1, // Assuming 1 is the ID for the admin role
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        email: 'user123@gmail.com',
        password: 'user123', // In a real application, passwords should be hashed
        role_id: 2, // Assuming 2 is the ID for the user role
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Accounts', {
      email: ['admin@gmail.com', 'user@gmail.com'],
    });
  },
};
