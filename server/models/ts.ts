import Sequelize, { DataTypes } from "sequelize";
import TriedLetters from "./triedletters";

export default {
    TriedLetters: {
        findAndCountAll: async () => ({ count: 15 })
    }
}