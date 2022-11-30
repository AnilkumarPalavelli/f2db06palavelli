const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
fish_type: {type:String, maxLength:10},
fish_weight: String,
fish_cost:  {type:Number, max:50}
})
module.exports = mongoose.model("fish",fishSchema)