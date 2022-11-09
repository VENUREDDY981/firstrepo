const mongoose = require("mongoose")
const earphoneSchema = mongoose.Schema({
Name: String,
Manufacture_Location: String,
price: Number
})
module.exports = mongoose.model("Earphone",
earphoneSchema)