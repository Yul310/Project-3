const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require('./category')

// make todo schema
const todoSchema = new Schema({
  // do we need to include users so that way the user will only see their specific to-dos? -K
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  date: Date,
  time: String,
  // isCompleted: boolean,
  // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -K
  // category: [{ type: Schema.Types.ObjectId, ref: "Category" }],

  urgency: String,
}, { timestamps: true });



// need to find all todos for a specific user
async function findAllTodos(userId) {
  return await this.find({ user: userId });
}














const Todo = model("Todo", todoSchema);

// make category model
const Category = model("Category", categorySchema);





///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
// Adding Notes
module.exports = Todo;
