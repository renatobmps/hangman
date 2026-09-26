'use strict';

const createUpdatedAtTrigger = require('../helpers/createUpdatedAtTrigger.cjs')
const dropUpdatedAtTrigger = require('../helpers/dropUpdatedAtTrigger.cjs')

const tableName = 'UserWords'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idUsers: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idWords: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Words',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      initialLife: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 6,
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
