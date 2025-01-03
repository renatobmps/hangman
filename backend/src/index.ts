import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto';
import { createUser } from './use_cases/create_user.ts';
import type { ICreateUserController } from './interfaces/create_user.ts';

type User = {
  id: string;
  name: string;
}

export interface CreateUser {
  username?: string;
  password?: string;
  email?: string;
}

const usersDB: Array<User> = []

const typeDefs = gql`
  type MockUser {
    id: String!,
    name: String!,
  }

  type Query {
    getUsers: [MockUser!]!
  }

  type Mutation {
    mockCreateUser(name: String!): MockUser!
  }

  type User {
    username: String!,
    password: String!,
    email: String,
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String): String!
  }
`

const server = new ApolloServer({
  typeDefs, resolvers: {
    Query: {
      getUsers: () => { return usersDB }
    },

    Mutation: {
      mockCreateUser: (_, args) => {
        const newUser = {
          id: randomUUID(),
          name: args.name
        }

        usersDB.push(newUser)

        return newUser
      },

      createUser: async (_, args: ICreateUserController) => createUser(args)
    }
  }
});

server.listen().then(({ url }) => console.info(`Api server listening on ${url}`));
