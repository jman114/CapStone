//require mongoose into our model file so that we can define a Schema and Model.
const mongoose = require("mongoose");

//To create the schema, we will declare it like so:
const serviceSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  stylist: {
    type: String,
    required: true
  },
  appointment: [String]
});

//After we have declared our schema, we will pass that schema to a Mongoose model with:
const Service = mongoose.model("Service", serviceSchema);

//Finally, we need to export both the Pizza Schema and Model so they can be used in the index.js.
module.exports = {
  schema: serviceSchema,
  model: Service
};
