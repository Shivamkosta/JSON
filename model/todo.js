//import mongooes for connect DB
var mongoose=require("mongoose");

//creating new schema object
var todoSchema=new mongoose.Schema
(
    {
        //defining schema with attribute name
        userId:
        {
            type: Number,
            maxlength:32,
            trim:true
        },
        Id:
        {
            type:Number,
            maxlength:50,
            trim:true
        },
        email:
        {
            type:String,
            maxlength:50
        },
    },
    {timestamps:true}
)
//export module
module.exports=mongoose.model("Todo", todoSchema);