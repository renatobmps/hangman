'use strict';
const timestamps = require('./config/timestamps')
const id = require('./config/id')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE SEQUENCE IF NOT EXISTS "users_id_seq"
      INCREMENT BY 1
      MINVALUE 1
      MAXVALUE 2147483647
      START 1
      CACHE 1
      NO CYCLE;
    `);

    await queryInterface.createTable('Users', {
      id: {
        ...id,
        defaultValue: Sequelize.literal('nextval(\'users_id_seq\')'),
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      ...timestamps,
    });

    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION update_users_seq()
      RETURNS TRIGGER AS $$
      BEGIN
        PERFORM setval('users_id_seq', COALESCE((SELECT MAX(id) FROM "Users"), 0) + 1, false);
        RETURN NULL;
      END;
      $$ LANGUAGE plpgsql;
    `);

    await queryInterface.sequelize.query(`
      CREATE TRIGGER users_update_seq_trigger
      AFTER INSERT ON "Users"
      FOR EACH STATEMENT
      EXECUTE FUNCTION update_users_seq();
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS users_update_seq_trigger ON "Users";');
    await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS update_users_seq();');
    await queryInterface.dropTable('Users');
    await queryInterface.sequelize.query('DROP SEQUENCE IF EXISTS "users_id_seq";');
  }
};
