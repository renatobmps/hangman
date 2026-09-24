'use strict';

const createUpdatedAtTrigger = require('../helpers/createUpdatedAtTrigger.cjs')
const dropUpdatedAtTrigger = require('../helpers/dropUpdatedAtTrigger.cjs')

const tableName = 'TriedLetters'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      letter: {
        type: Sequelize.CHAR,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z]$/,
        },
      },
      idUserWords: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserWords",
          key: "id",
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        onUpdate: new Date(),
      },
    })

    await createUpdatedAtTrigger(queryInterface, tableName)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
    await dropUpdatedAtTrigger(queryInterface, tableName)
  }
};
