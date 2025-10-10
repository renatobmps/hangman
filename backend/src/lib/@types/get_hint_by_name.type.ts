import { Hint } from "@prisma/client";

type IGetHintByName = (name: string) => Promise<Hint | null>;

export default IGetHintByName;
