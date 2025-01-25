import { ApolloServer, gql } from 'apollo-server'
import { createUser } from './use_cases/create_user.ts';
import getHints from './use_cases/get_hints/index.ts';
import type { IAddHintControllerExecute } from './use_cases/add_hint/add_hint.interfaces.ts';
import addHint from './use_cases/add_hint/index.ts';
import getWords from './use_cases/get_words/index.ts';
import type ICreateUserInput from './controllers/@types/create_user_input.type.ts';

const typeDefs = gql`
  type Hint {
    id: String,
    text: String,
    is_activated: Boolean,
    total_words: Int,
    words: [Word]
  }
  
  type Word {
    id: String,
    text: String,
    description: String
    is_activated: Boolean,
    hints: [Hint]!
  }

  type Query {
    getHints: [Hint]!
    getWords: [Word]!
  }

  type CreateUserRes {
    id: String,
  }

  type CreateHintRes {
    id: String,
  }

  type Mutation {
    createHint(text: String!, isActive: Boolean, words: String): CreateHintRes
    createUser(username: String!, password: String!, email: String): CreateUserRes
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      getHints: async () => getHints(),
      getWords: async () => getWords(),
    },

    Mutation: {
      createHint: async (_, args: IAddHintControllerExecute) => addHint(args),
      createUser: async (_, args: ICreateUserInput) => createUser(args),
    }
  }
});

server.listen().then(({ url }) => console.info(`Api server listening on ${url}`));
