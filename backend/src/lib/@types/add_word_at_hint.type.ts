import { HintsWords } from "@prisma/client";

type IAddWordAtHint = (hind_id: string, word_id: string) => Promise<HintsWords>;

export default IAddWordAtHint;
