require("dotenv").config({ path: '.env.local' });

const dbConfig = {
  "username": process.env.POSTGRES_USER,
  "password": process.env.POSTGRES_PASSWORD,
  "database": process.env.POSTGRES_DB,
  "host": process.env.POSTGRES_HOST,
  "dialect": "postgres",
  "port": Number(process.env.POSTGRES_PORT),
  "logging": true,
  "dialectOptions": {
    "connectTimeout": 60000,
    "ssl": false
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
};

module.exports = {
  "development": dbConfig,
  "test": {
    ...dbConfig,
    "logging": true,
  },
  "production": {
    ...dbConfig,
    "logging": false,
  }
};
