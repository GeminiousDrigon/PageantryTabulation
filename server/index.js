const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer, graphiqlExpress } = require("apollo-server-express");
// configure rootpath
require("rootpath")();
const typeDefs = require("graphql/schemas");
const resolvers = require("graphql/resolvers");
const context = require("graphql/context");
const { sequelize } = require("database/models");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded
app.use(bodyParser.json()); //application/json

app.get("/", (req, res) => res.send("hello there!"));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
	introspection: true,
	playground: {
		settings: {
			"editor.theme": "light"
		}
	}
});

(async function () {
	try {
		await sequelize.authenticate();
		console.log("Connection to the database has been established successfully");
	} catch (err) {
		console.error("Unable to connect to the database", err);
	}
})();

server.applyMiddleware({ app, path: "/graphql" });

app.listen(8080, () => {
	console.log("Server is listening to port 8080");
});
