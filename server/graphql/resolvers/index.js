const { resolvers: scalars } = require("graphql-scalar");
const user = require("./user");
const merge = require("lodash/merge");
const pageant = require("./pageant");

const initial = {
	Query: {
		testQuery: (obj, args, context, info) => {
			return "Test for query";
		}
	},
	Mutation: {
		testMutation: () => "Test for mutation"
	},

	...scalars
};

module.exports = merge(initial, user, pageant);
