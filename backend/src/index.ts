import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto';
import { db } from './lib/db.ts';

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

      createUser: async (_, args: CreateUser) => {
        if (!args.username) {
          throw new Error("Please enter a username")
        }

        if (!args.password) {
          throw new Error("Please enter a password")
        }

        console.log({createUser: args});

        const newUser = await db().user.create({
          data: {
            password: args.password, username: args.username, email: args.email
          }
        });

        return newUser.id;
      }
    }
  }
});

server.listen().then(({ url }) => console.info(`Api server listening on ${url}`));