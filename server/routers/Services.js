//We also need to import the Services model and instantiate an instance of Express Router module.

const { Router } = require("express");
const Service = require("../models/Service");
const router = Router();

// export the router variable to be used in the index.js file
module.exports = router;
