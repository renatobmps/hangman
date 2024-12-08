import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs.ts";
import { createUser } from "./mutations.ts";

export const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Mutation: {
      createUser: createUser
    }
  }
})
