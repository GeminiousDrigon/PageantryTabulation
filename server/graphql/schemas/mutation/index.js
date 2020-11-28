const { gql } = require("apollo-server-express");

const type = gql`
	type Mutation {
		hello: String
	}
`;

module.exports = type