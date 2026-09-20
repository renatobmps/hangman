'use strict';

const { DataTypes } = require('sequelize');
const createUpdatedAtTrigger = require('../helpers/createUpdatedAtTrigger.cjs')
const dropUpdatedAtTrigger = require('../helpers/dropUpdatedAtTrigger.cjs')

const tableName = 'Words'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      word: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      hint: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          is: /^[A-zÀ-ú]+$/,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
        onUpdate: new Date(),
      },
    });

    await createUpdatedAtTrigger(queryInterface, tableName)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(tableName);
    await dropUpdatedAtTrigger(queryInterface, tableName)
  }
};
