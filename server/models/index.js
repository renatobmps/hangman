import Sequelize, { DataTypes } from "sequelize";
import pg from "pg";
import TriedLetters from "./triedletters.js";
import User from "./user.js";
import UserWord from "./userword.js";
import Word from "./word.js";

export const dbConfig = {
  dialect: "postgres",
  dialectModule: pg,
  host: process.env.POSTGRES_HOST,
  logging: process.env.NODE_ENV === "production",
  dialectOptions: {
    ssl: process.env.NODE_ENV === "production",
  },
};

console.log(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  dbConfig
);

let sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  dbConfig
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
