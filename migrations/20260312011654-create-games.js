'use strict';
const timestamps = require('./config/timestamps')
const id = require('./config/id')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE IF NOT EXISTS "userwords_id_seq"
      INCREMENT BY 1
      MINVALUE 1
      MAXVALUE 2147483647
      START 1
      CACHE 1
      NO CYCLE;
    `);

    await queryInterface.createTable('UserWords', {
      id: {
        ...id,
        defaultValue: Sequelize.literal('nextval(\'userwords_id_seq\')'),
      },
      idUsers: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idWords: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Words',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
      initialLife: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 6
      },
      ...timestamps,
    });

    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_userwords_seq()
      RETURNS TRIGGER AS $$
      BEGIN
        PERFORM setval('userwords_id_seq', COALESCE((SELECT MAX(id) FROM "UserWords"), 0) + 1, false);
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER userwords_update_seq_trigger
      AFTER INSERT ON "UserWords"
      FOR EACH STATEMENT
      EXECUTE FUNCTION update_userwords_seq();
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS userwords_update_seq_trigger ON "UserWords";');
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS update_userwords_seq();');
    await queryInterface.dropTable('UserWords');
    await queryInterface.sequelize.query('DROP SEQUENCE IF EXISTS "userwords_id_seq";');
  }
};
