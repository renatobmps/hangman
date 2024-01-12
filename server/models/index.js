import Sequelize, { DataTypes } from "sequelize";
import pg from "pg";
import TriedLetters from "./triedletters";
import User from "./user";
import UserWord from "./userword";
import Word from "./word";

let sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: "postgres",
    dialectModule: pg,
    logging: true,
  }
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
