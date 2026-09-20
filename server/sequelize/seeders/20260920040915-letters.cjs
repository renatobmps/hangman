'use strict';

const bkp = require('../bkp/data.cjs')
const updateTableIndex = require('../helpers/updateTableIndex.cjs')

const tableName = 'TriedLetters'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, bkp[tableName], {})

    await updateTableIndex(queryInterface, tableName)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};
