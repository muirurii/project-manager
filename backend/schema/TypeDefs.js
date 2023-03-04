const { gql } = require("apollo-server-express");

const typeDefs = gql `
    type User{
        username: String!,
        email: String!,
        password: String!,
    }

    #Queries

    type Query {
        getUsers: [User!]!
    }
`

module.exports = { typeDefs };