"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carSchema = Schema({
  modelo: {
    type: String,
  },
  marca: {
    type: String,
  },
  tipo: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("car", carSchema);
