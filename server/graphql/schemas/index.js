const { gql } = require("apollo-server-express");
const customType = require("./customType");
const pageant = require("./models/pageant");
const user = require("./models/user");
const scalar = require("./scalar");

const baseSchema = gql`
	type Query {
		testQuery: String
	}

	type Mutation {
		testMutation: String
	}
`;

module.exports = [baseSchema,customType, scalar, user, pageant];
