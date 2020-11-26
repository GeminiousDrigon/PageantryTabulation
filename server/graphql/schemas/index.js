const { gql } = require("apollo-server-express");

const type = gql`
	type Query {
		hello(testArg: String): String
	}

	type Mutation {
		hello: String
	}
`;

module.exports = [type];
