const route = require("express").Router();
const schemaServices = require("../services/schema");
route.post("/details",schemaServices);
module.exports = route;
