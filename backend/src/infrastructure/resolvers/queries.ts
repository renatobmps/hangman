import getHints from "../../use_cases/get_hints/index.ts";
import getWords from "../../use_cases/get_words/index.ts";

export const QueryResolvers = {
  getHints: async () => getHints(),
  getWords: async () => getWords(),
};
