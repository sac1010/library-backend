const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    category:{type:String, required:true},
    status:{type:String, required:true, default:"available"}
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports = mongoose.model("book", bookSchema)