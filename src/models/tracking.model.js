const mongoose = require("mongoose")

const trackingSchema = new mongoose.Schema({
    bookId:{type:mongoose.Schema.Types.ObjectId, required:true},
    action:{type:String, required:true},
    userId: {type:mongoose.Schema.Types.ObjectId, required:true}
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports = mongoose.model("tracking", trackingSchema)