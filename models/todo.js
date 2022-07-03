const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require('./category')

// make todo schema
const todoSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  time: String,
  isCompleted: boolean,
  // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -KM
  // category: [{ type: Schema.Types.ObjectId, ref: "Category" }],

  urgency: String,
}, { timestamps: true });

const Todo = model("Todo", todoSchema);

// make category model
const Category = model("Category", categorySchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
// Adding Notes
module.exports = Todo;
