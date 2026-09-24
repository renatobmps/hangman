/** @type {(queryInterface: unknown, tableName: string) => Promise<string>} */
const updateTableIndex = (queryInterface, tableName) => {
  return queryInterface.sequelize.query(`
    SELECT setval(
      pg_get_serial_sequence('"${tableName}"', 'id'),
      (SELECT MAX(id) FROM "${tableName}")
    )
  `)
}

module.exports = updateTableIndex
