'use strict';
const timestamps = require('./config/timestamps')
const id = require('./config/id')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE IF NOT EXISTS "triedletters_id_seq"
      INCREMENT BY 1
      MINVALUE 1
      MAXVALUE 2147483647
      START 1
      CACHE 1
      NO CYCLE;
    `);

    await queryInterface.createTable('TriedLetters', {
      id: {
        ...id,
        defaultValue: Sequelize.literal('nextval(\'triedletters_id_seq\')'),
      },
      letter: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      idUserWords: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'UserWords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ...timestamps,
    });

    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_triedletters_seq()
      RETURNS TRIGGER AS $$
      BEGIN
        PERFORM setval('triedletters_id_seq', COALESCE((SELECT MAX(id) FROM "TriedLetters"), 0) + 1, false);
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER triedletters_update_seq_trigger
      AFTER INSERT ON "TriedLetters"
      FOR EACH STATEMENT
      EXECUTE FUNCTION update_triedletters_seq();
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS triedletters_update_seq_trigger ON "TriedLetters";');
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS update_triedletters_seq();');
    await queryInterface.dropTable('TriedLetters');
    await queryInterface.sequelize.query('DROP SEQUENCE IF EXISTS "triedletters_id_seq";');
  }
};
