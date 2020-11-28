const { gql } = require("apollo-server-express");

const type = gql`
	type Query {
		hello(testArg: String): String
	}
`;

module.exports = type;
