import prismaRepository from "../../lib/prisma_repository.ts";
import GetWordsRepository from "../../entities/get_words_repository.ts";
import GetWordsController from "../../controllers/get_words.controller.ts";

const getWords = async () => {
  const controller = new GetWordsController({
    repository: new GetWordsRepository(prismaRepository),
  });

  return controller.exec();
};

export default getWords;
