const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//-- Model ---------------------------------------------//

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    //reference to the category model
    category: String,
    // [{ type: Schema.Types.ObjectId, ref: "Category" }],

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
const Note = model("Note", noteSchema);

//-- Export Model ---------------------------------------------//
module.exports = Note;
