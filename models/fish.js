const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
fish_type: String,
fish_weight: String,
fish_cost: Number
})
module.exports = mongoose.model("fish",fishSchema)