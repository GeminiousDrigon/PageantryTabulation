const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
// configure rootpath
require("rootpath")();
const typeDefs = require("graphql/schemas");
const resolvers = require("graphql/resolvers");
const context = require("graphql/context");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded
app.use(bodyParser.json()); //application/json

app.get("/", (req, res) => res.send("hello there!"));

app.use(
	"/graphql",
	graphiqlExpress({
		typeDefs,
		resolvers,
		context
	})
);

app.listen(8080, () => {
	console.log("Server is listening to port 8080");
});
