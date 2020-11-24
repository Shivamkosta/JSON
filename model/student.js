const mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
    id : Number,
    name : String,
    degree : String,
    mobile : Number
},{timestamps:true})

module.exports = mongoose.model("Student",StudentSchema);
