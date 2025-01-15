'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const users = [
        {
          email: 'hoshimachi@example.com',
          password: await bcrypt.hash('superstar', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: 'yoasobi@example.com',
          password: await bcrypt.hash('yorunikakeru', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: 'yagami@example.com',
          password: await bcrypt.hash('wargreymon', 12),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
      await queryInterface.bulkInsert('Users', users, {})
      console.log('Succeed in creating users!')
    } catch (err) {
      console.error('Error on creating users:', err)
    }
  },

  async down (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('Users', {})
      console.log('Succeed in eliminating users!')
    } catch (err) {
      console.error('Error on eliminating users:', err)
    }
  }
};
