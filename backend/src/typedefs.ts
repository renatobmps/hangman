import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    username: String!,
    password: String!,
    email: String,
  }

  type Mutation {
    createUser(user: User!): String!
  }
`
