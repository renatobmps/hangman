/** @type {(queryInterface: unknown, tableName: string) => Promise<string>} */
const dropUpdatedAtTrigger = (queryInterface, tableName) => {
  return queryInterface.sequelize.query(`
    DROP TRIGGER IF EXISTS trg_${tableName}_set_updated_at ON "${tableName}";
  `);
}

module.exports = dropUpdatedAtTrigger