'use strict';
const { Op } =require('sequelize');
const airplane = require('../models/airplane');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row:1,
        col:'A',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:21,
        col:'B',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:23,
        col:'C',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:1,
        col:'B',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:1,
        col:'C',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:1,
        col:'D',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:2,
        col:'A',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:2,
        col:'B',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:2,
        col:'C',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:2,
        col:'B',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:2,
        col:'C',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        airplaneId: 1,
        row:2,
        col:'D',
        createdAt: new Date(),
        updatedAt: new Date()

      },

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes', {[Op.or] : [{modelNumber: "airbus a380"},{modelNumber: "airbus340"}]})
  }
};
