import database from "../models";
import { Op } from "sequelize";

class User {
  static async getTopTenUsers(req, res) {
    try {
      await database.sequelize.sync();
      let users = await database.User.findAll();
      users = users.map((user) => {
        return {
          ...user.dataValues,
          password: undefined,
          updatedAt: undefined,
        };
      });

      const sevenDaysAgo = new Date(
        new Date().setDate(new Date().getDate() - 7),
      );
      sevenDaysAgo.setHours(0);
      sevenDaysAgo.setMinutes(0);
      sevenDaysAgo.setSeconds(0);

      for (const user of users) {
        user.performance = await User.getUserPerformance(user.id, sevenDaysAgo);
      }

      const activeUsers = users.filter(
        (user) => user.performance.game.total > 0,
      );

      const orderByResult = activeUsers.sort(
        (a, b) => b.performance.game.won.total - a.performance.game.won.total,
      );

      res.status(200).json(orderByResult.filter((_user, index) => index < 10));
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteUser(req, res) {
    try {
      await database.sequelize.sync();
      const { id } = req.query;
      const user = await database.User.findByPk(id);
      await user.destroy();
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  // AQUI PODE TER REPETIÇÃO

  static async createUser(req, res) {
    try {
      await database.sequelize.sync();
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await database.User.create(req.body);
      user.password = undefined;
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  static async getUserPerformance(idUser, sinceAt = "1900-01-01") {
    return new Promise(async (resolve, reject) => {
      try {
        await database.sequelize.sync();
        const userGames = await database.UserWord.findAll({
          raw: true,
          where: {
            idUsers: idUser,
            done: {
              [Op.ne]: null,
            },
            updatedAt: {
              [Op.gte]: new Date(sinceAt),
            },
          },
        });
        const gameLetters = await database.TriedLetters.findAll({
          raw: true,
          where: {
            idUserWords: {
              [Op.in]: userGames.map((game) => game.id),
            },
          },
        });
        resolve({
          game: {
            total: userGames.length,
            won: {
              total: userGames.filter((game) => !!game.done).length,
              percentage: Number(
                (
                  (userGames.filter((game) => !!game.done).length /
                    userGames.length) *
                  100
                ).toFixed(2),
              ),
            },
            lost: {
              total: userGames.filter((game) => game.done == 0).length,
              percentage: Number(
                (
                  (userGames.filter((game) => game.done == 0).length /
                    userGames.length) *
                  100
                ).toFixed(2),
              ),
            },
          },
          letterPrecision: {
            total: gameLetters.length,
            won: {
              total: gameLetters.filter((letter) => !!letter.correct).length,
              percentage: Number(
                (
                  (gameLetters.filter((letter) => !!letter.correct).length /
                    gameLetters.length) *
                  100
                ).toFixed(2),
              ),
            },
            lost: {
              total: gameLetters.filter((letter) => letter.correct == 0).length,
              percentage: Number(
                (
                  (gameLetters.filter((letter) => letter.correct == 0).length /
                    gameLetters.length) *
                  100
                ).toFixed(2),
              ),
            },
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static async getAllUsers(req, res) {
    try {
      try {
        await database.sequelize.sync();
      } catch (e) {
        throw new Error(e.message ?? e ?? "Problem to sync database");
      }
      let users = await database.User.findAll();
      users = users.map((user) => {
        return {
          ...user.dataValues,
          password: undefined,
          updatedAt: undefined,
        };
      });

      for (const user of users) {
        user.performance = await User.getUserPerformance(user.id);
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getUserById(req, res) {
    try {
      await database.sequelize.sync();
      const { id } = req.query;
      const user = await database.User.findOne({
        raw: true,
        where: { id },
      });

      user.performance = await User.getUserPerformance(id);
      user.password = undefined;
      user.updatedAt = undefined;
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateUser(req, res) {
    try {
      await database.sequelize.sync();
      const { id } = req.user;
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }
      const user = await database.User.findByPk(id);
      await user.update(req.body);
      user.password = undefined;
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default User;
