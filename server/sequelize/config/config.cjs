require('dotenv').config();

/**
 * @typedef {Object} DatabaseConfig
 * @property {string} username
 * @property {string} password
 * @property {string} database
 * @property {string} host
 * @property {number} [port]
 * @property {'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql'} dialect
 * @property {boolean | function} [logging]
 * @property {{ max: number, min: number, idle: number }} [pool]
 */

/**
 * @typedef {Object} AppConfig
 * @property {DatabaseConfig} development
 * @property {DatabaseConfig} test
 * @property {DatabaseConfig} production
 */

/** @type {AppConfig} */
module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
  },
};
