const { gql } = require("apollo-server-express");

module.exports = gql`
	#================================Type================================#
	type User {
		id: UUID
		firstname: String
		lastname: String
		username: String
		email: String
		updatedBy: UUID
		createdAt: Date
		updatedAt: Date
		deletedAt: Date
  }
	#================================Type================================#
  
  #================================Query================================#
  extend type Query{
    userTest: String
  }
  #================================Query================================#
  
  #===============================Mutation===============================#
  extend type Mutation{
    userMutationTest:String
  }
	#===============================Mutation===============================#

`;
