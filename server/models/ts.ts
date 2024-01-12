import { Sequelize, DataTypes } from 'sequelize';
import pg from 'pg';
import TriedLetters from "./triedletters";

export default {
    TriedLetters: {
        findAndCountAll: async () => {
            const sequelize = new Sequelize(
                process.env.POSTGRES_DB as string,
                process.env.POSTGRES_USER as string,
                process.env.POSTGRES_PASSWORD as string,
                {
                    dialect: 'postgres',
                    dialectModule: pg,
                    host: 'abc',
                    logging: true,
                    ssl: true,
                }
            );

            TriedLetters(sequelize, DataTypes);

            return { count: 15 }
        }
    }
}