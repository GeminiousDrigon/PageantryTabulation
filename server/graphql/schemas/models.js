const { gql } = require("apollo-server-express");

module.exports = gql`
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
`;
