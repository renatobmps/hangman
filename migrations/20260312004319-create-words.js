'use strict';
const timestamps = require('./config/timestamps')
const id = require('./config/id')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE IF NOT EXISTS "words_id_seq"
      INCREMENT BY 1
      MINVALUE 1
      MAXVALUE 2147483647
      START 1
      CACHE 1
      NO CYCLE;
    `);

    await queryInterface.createTable('Words', {
      id: {
        ...id,
        defaultValue: Sequelize.literal('nextval(\'words_id_seq\')'),
      },
      word: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      hint: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      ...timestamps,
    });

    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_words_seq()
      RETURNS TRIGGER AS $$
      BEGIN
        PERFORM setval('words_id_seq', COALESCE((SELECT MAX(id) FROM "Words"), 0) + 1, false);
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER words_update_seq_trigger
      AFTER INSERT ON "Words"
      FOR EACH STATEMENT
      EXECUTE FUNCTION update_words_seq();
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS words_update_seq_trigger ON "Words";');
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS update_words_seq();');
    await queryInterface.dropTable('Words');
    await queryInterface.sequelize.query('DROP SEQUENCE IF EXISTS "words_id_seq";');
  }
};
