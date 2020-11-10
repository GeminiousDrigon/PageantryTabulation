const { gql } = require("apollo-server-express");

const type = gql`
	type Query {
		hello: String
	}

	type Mutation {
		hello: String
	}
`;

module.exports = [type];
