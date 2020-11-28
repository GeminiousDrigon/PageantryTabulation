const { resolvers: scalars } = require("graphql-scalar")

const initial = {
	Query: {
		hello: (obj, args, context, info) => {
			return "hello";
		}
	},
	Mutation: {
		hello: () => "hello"
	},
	
	...scalars
};

module.exports = [initial];
