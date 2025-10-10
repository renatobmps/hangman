import { Word } from "@prisma/client";

type IGetAllWords = () => Promise<Array<Word | null>>;

export default IGetAllWords;
