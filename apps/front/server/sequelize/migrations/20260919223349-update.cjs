'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION set_updated_at()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW."updatedAt" = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP FUNCTION IF EXISTS set_updated_at();
    `)
  }
};
