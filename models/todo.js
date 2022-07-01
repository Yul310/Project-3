const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// make todo schema
const todoSchema = new Schema(
  {
    name: { type: String, required: true },
    date: Date,
    time: String,
    category: String,
    urgency: String,
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
// Adding Notes
module.exports = Todo;
