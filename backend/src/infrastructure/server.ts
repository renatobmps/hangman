import type { IAddHintControllerExecute } from "../use_cases/add_hint/add_hint.interfaces.ts";
import type { ICreateUserInput } from "../interfaces/create_user.type.ts";
import { ApolloServer } from "apollo-server";
import { readFileSync } from 'fs';
import { dirname, join } from "node:path";
import { fileURLToPath } from 'url';
import CreateUser from "../controllers/create_user.controller.ts";
import addHint from "../use_cases/add_hint/index.ts";
import { QueryResolvers } from "../infrastructure/resolvers/queries.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = new ApolloServer({
  typeDefs: readFileSync(join(__dirname, 'schema.graphql'), 'utf-8'),
  resolvers: {
    Query: QueryResolvers,
    Mutation: {
      createHint: async (_, args: IAddHintControllerExecute) => addHint(args),
      createUser: async (_, args: ICreateUserInput) => new CreateUser().exec(args),
    },
  },
});

export default server