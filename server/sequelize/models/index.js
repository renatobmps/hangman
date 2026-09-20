import Sequelize, { DataTypes } from "sequelize";
import pg from "pg";
import TriedLetters from "./triedletters.js";
import User from "./user.js";
import UserWord from "./userword.js";
import Word from "./word.js";
import config from '../config/config.cjs'

export const dbConfig = {
  ...config.development,
  dialectModule: pg,
  logging: process.env.NODE_ENV === "production",
  ...(process.env.NODE_ENV === "production" ? {
    ssl: true,
  } : {}),
  dialectOptions: {
    ssl: process.env.NODE_ENV === "production"
  }
};

let sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
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
