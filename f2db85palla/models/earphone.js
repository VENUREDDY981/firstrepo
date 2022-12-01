const mongoose = require("mongoose")
const earphoneSchema = mongoose.Schema({
Name: {
    type:String,
    required:true,
    minLength:0
},
Manufacture_Location: String,
price: {
    type:Number,
    required:true,
    min:0
}
})
module.exports = mongoose.model("Earphone",
earphoneSchema)