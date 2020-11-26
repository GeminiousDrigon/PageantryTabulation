// TODO: Delete after making one Query and Mutation
const initial = {
	Query: {
		hello: (obj, args, { db }, info) => {
			console.log(db);
			return context.user();
		}
	},
	Mutation: {
		hello: () => "hello"
	}
};

module.exports = [initial];
