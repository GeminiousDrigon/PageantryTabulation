const express = require("express");
const app = express();
console.log(process.env.NODE_ENV);

app.get("/", (req,res) => res.send("hello there!"));

app.listen(8080, () => {
	console.log("Server is listening to port 8080");
});
