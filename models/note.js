const mongoose = require("mongoose");
const {Schema, model} = mongoose;
require('./category')

//-- Model ---------------------------------------------//

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    //reference to the category model
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],

    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// make category model
const Category = model("Category", categorySchema);

//-- Export Model ---------------------------------------------//
module.exports = mongoose.model("Note", noteSchema);
