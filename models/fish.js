const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
fish_type: {type:String, minLength:10},
fish_weight: String,
fish_cost: Number
})
module.exports = mongoose.model("fish",fishSchema)