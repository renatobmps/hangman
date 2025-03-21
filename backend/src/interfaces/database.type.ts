// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { PrismaClient } from "@prisma/client";
import type IUser from "src/lib/@types/user.type";
import type IWord from "src/lib/@types/word.type";

interface databaseOp<T = unknown> {
  create(args: { data: Partial<T> }): Promise<Partial<T>>;
  findFirst(args: { where?: { OR?: Array<Partial<T>> } }): Promise<Partial<T>>;
}

/** Based on {@link PrismaClient} */
export default interface IDatabase {
  $disconnect(): Promise<void>;
  user: databaseOp<IUser>;
  word: databaseOp<IWord>;
}
