import { ApolloServer, gql } from 'apollo-server'
import { createUser } from './use_cases/create_user.ts';
import type { ICreateUserController } from './interfaces/create_user.ts';
import getHints from './use_cases/get_hints/index.ts';

const typeDefs = gql`
  type Word {
    id: String,
    text: String,
    description: String
    is_activated: Boolean,
  }

  type Hint {
    id: String,
    text: String,
    is_activated: Boolean,
    total_words: Int,
    words: [Word]
  }

  type Query {
    getHints: [Hint]!
  }

  type CreateUserRes {
    id: String,
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String): CreateUserRes
  }
`

const server = new ApolloServer({
  typeDefs, resolvers: {
    Query: {
      getHints: async () => getHints(),
    },

    Mutation: {
      createUser: async (_, args: ICreateUserController) => createUser(args),
    }
  }
});

server.listen().then(({ url }) => console.info(`Api server listening on ${url}`));
