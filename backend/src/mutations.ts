import db from "./lib/db.ts"

export const createUser = async (_, args) => {
  if (!args.username) {
    throw new Error("Please enter a username")
  }

  if (!args.password) {
    throw new Error("Please enter a password")
  }

  const newUser = await db().user.create({
    data: {
      ...args,
    }
  });

  return newUser.id;
}