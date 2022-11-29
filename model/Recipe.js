const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recipe = new Schema({
    name: String,
    ingredients: [String]
  });

module.exports = Recipe = model("Recipe", recipe);
