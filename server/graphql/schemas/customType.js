const { gql } = require("apollo-server-express");

module.exports = gql`
  type GraphQLRetVal{
    payload: String!
    success: Boolean!
    message: String!
  }
`
