const mongoose = require("./connection");
const { Schema, model } = mongoose;

// make todo schema
const todoSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  time: String,
  category: String,
  urgency: String,
});

const Todo = model("Todo", todoSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Todo;
