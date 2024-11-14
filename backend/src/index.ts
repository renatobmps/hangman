import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto';

type User = {
  id: string;
  name: string;
}

const usersDB: Array<User> = []

const typeDefs = gql`
  type User {
    id: String!,
    name: String!,
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`

const server = new ApolloServer({
  typeDefs, resolvers: {
    Query: {
      getUsers: () => { return usersDB }
    },

    Mutation: {
      createUser: (_, args) => {
        const newUser = {
          id: randomUUID(),
          name: args.name
        }

        usersDB.push(newUser)

        return newUser
      }
    }
  }
});

server.listen().then(({ url }) => console.info(`Api server listening on ${url}`));