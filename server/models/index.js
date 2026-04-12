import Sequelize, { DataTypes } from "sequelize";
import pg from "pg";
import TriedLetters from "./triedletters.js";
import User from "./user.js";
import UserWord from "./userword.js";
import Word from "./word.js";

const sslEnabled =
  process.env.PGSSLMODE !== "disable" &&
  process.env.NODE_ENV === "production";

export const dbConfig = {
  dialectModule: pg,
  dialect: process.env.POSTGRES_DIALECT || "postgres",
  host: process.env.POSTGRES_HOST || "database",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DB || "hangman",
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD,
  logging: process.env.NODE_ENV === "production",
  dialectOptions: {
    ssl: sslEnabled ? { rejectUnauthorized: false } : false,
    connectTimeout: 60000,
  },
  retry: {
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
      /Connection terminated unexpectedly/
    ],
    max: 5
  }
}

let sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig,
);

const db = {
  TriedLetters: TriedLetters(sequelize, DataTypes),
  User: User(sequelize, DataTypes),
  UserWord: UserWord(sequelize, DataTypes),
  Word: Word(sequelize, DataTypes),
};
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
