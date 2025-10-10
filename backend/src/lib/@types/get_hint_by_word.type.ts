import { Hint, HintsWords } from "@prisma/client";

type IGetHintByWord = (
  word_id: string,
) => Promise<Array<HintsWords & { id_hint: Hint }> | null>;

export default IGetHintByWord;
