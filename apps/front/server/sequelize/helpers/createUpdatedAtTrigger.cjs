/** @type {(queryInterface: unknown, tableName: string) => Promise<string>} */
const createUpdatedAtTrigger = (queryInterface, tableName) => {
  return queryInterface.sequelize.query(`
    DROP TRIGGER IF EXISTS trg_${tableName}_set_updated_at ON "${tableName}";
    CREATE TRIGGER trg_${tableName}_set_updated_at
      BEFORE UPDATE
      ON "${tableName}"
      FOR EACH ROW
      EXECUTE FUNCTION set_updated_at();
  `);
}

module.exports = createUpdatedAtTrigger