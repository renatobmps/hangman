import { Hint } from "@prisma/client";

type IAddHint = (hint_text: string, hint_active: boolean) => Promise<Hint>;

export default IAddHint;
