import database from "../models";

class Word {
  static async getAllWords(req, res) {
    try {
      let words = await database.Word.findAll();
      res.status(200).json(words);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getWordById(req, res) {
    const { id } = req.query;
    try {
      const word = await database.Word.findByPk(id);
      res.status(200).json(word);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async createWord(req, res) {
    try {
      let { word, hint, description } = req.body;
      word = word.toLowerCase();
      const response = await database.Word.create({ word, hint, description });
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateWord(req, res) {
    try {
      const { id } = req.query;
      let { word, hint, description } = req.body;

      const databaseResponse = await database.Word.findByPk(id);

      const newData = {
        ...(word ? { word: word.toLowerCase() } : {}),
        ...(hint ? { hint: hint.toLowerCase() } : {}),
        ...(description ? { description: description } : {}),
      };
      await databaseResponse.update(newData);
      res.status(200).json(databaseResponse);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteWord(req, res) {
    try {
      const { id } = req.query;

      const word = await database.Word.findByPk(id);
      const gameWordsCount = await database.UserWord.findAndCountAll({
        where: { idWords: id },
      });

      if (gameWordsCount.count > 0) {
        return res
          .status(400)
          .json({ message: "This word is in some game(s)" });
      }

      await word.destroy();

      res.status(200).json({ message: "Word deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default Word;
