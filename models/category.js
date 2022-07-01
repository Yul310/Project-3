const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
       
    }
}, {
    timestamps: true,

})