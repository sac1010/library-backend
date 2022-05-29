const mongoose = require("mongoose")

const trackingSchema = new mongoose.Schema({
    book:{type:mongoose.Schema.Types.ObjectId, required:true},
    status:{type:String, required:true},
    userId: {type:mongoose.Schema.Types.ObjectId, required:true}
},
{
    versionKey:false,
    timestamps:true
}
)

module.exports = mongoose.model("tracking", trackingSchema)