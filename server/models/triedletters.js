import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class TriedLetters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TriedLetters.init(
    {
      letter: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[a-zA-Z]$/,
        },
      },
      idUserWords: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "UserWords",
          key: "id",
        },
      },
      correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TriedLetters",
      raw: true,
    },
  );
  return TriedLetters;
};
