require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_DIALECT,
    "port": Number(process.env.POSTGRES_PORT),
    "logging": true,
    "dialectOptions": {
      "connectTimeout": 60000
    },
    "retry": {
      "match": [
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /Connection terminated unexpectedly/
      ],
      "max": 5
    }
  },
  "test": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_DIALECT,
    "port": Number(process.env.POSTGRES_PORT),
    "logging": true,
    "dialectOptions": {
      "connectTimeout": 60000
    },
    "retry": {
      "match": [
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /Connection terminated unexpectedly/
      ],
      "max": 5
    }
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.POSTGRES_HOST,
    "dialect": process.env.POSTGRES_DIALECT,
    "port": Number(process.env.POSTGRES_PORT),
    "logging": false,
    "dialectOptions": {
      "connectTimeout": 60000
    },
    "retry": {
      "match": [
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /Connection terminated unexpectedly/
      ],
      "max": 5
    }
  }
}
