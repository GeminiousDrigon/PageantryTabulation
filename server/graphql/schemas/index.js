const query = require("./query");
const mutation = require("./mutation");
const models = require("./models");
const scalar = require("./scalar");

module.exports = [query, mutation, scalar, models];
