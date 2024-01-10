import Sequelize, { DataTypes } from "sequelize";
import configs from "../config/config";
import TriedLetters from "./triedletters";
import User from "./user";
import UserWord from "./userword";
import Word from "./word";
const env = process.env.NODE_ENV || "development";

const config = configs[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

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
