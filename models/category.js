const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    title: { type: String, required: true },
    // dueDate: {
    //     type: Date,
    //     required: true
    // },
    sortOrder: {type:Number, default:0},
},  {
        timestamps: true,

    })

module.exports = mongoose.model("Category", categorySchema);