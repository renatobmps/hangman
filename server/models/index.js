import Sequelize, { DataTypes } from "sequelize";
import pg from "pg";
import TriedLetters from "./triedletters";
import User from "./user";
import UserWord from "./userword";
import Word from "./word";

export const dbConfig = {
  dialect: "postgres",
  dialectModule: pg,
  host: process.env.POSTGRES_HOST,
  logging: process.env.NODE_ENV === "production",
  ssl: {
    require: true,
    rejectUnauthorized: false, // To avoid "DEPTH_ZERO_SELF_SIGNED_CERT" error
  },
  dialectOptions: {
    ssl: true,
  },
};

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
