const { gql } = require("apollo-server-express");

module.exports = gql`
	#================================Type================================#
	type Pageant {
		id: UUID
		title: String
		description: String
		date: Date
		address: String
		updatedBy: UUID
		createdAt: Date
		updatedAt: Date
		deletedAt: Date
	}
	#================================Type================================#

	#================================Query================================#
	extend type Query {
		pageantTest: GraphQLRetVal
	}
	#================================Query================================#

	#===============================Mutation===============================#
	extend type Mutation {
    pageantMutationTest: String,
    
	}
	#===============================Mutation===============================#
`;
