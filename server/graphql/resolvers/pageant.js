const GraphQLRetVal = require("graphql/utils/GraphQLRetVal");

module.exports = {
	Query: {
		pageantTest: (obj, args, context) => new GraphQLRetVal("OK", true, "Trying GraphQLRetVal")
	},
	Mutation: {
		pageantMutationTest: () => "pageant mutation test"
	}
};
