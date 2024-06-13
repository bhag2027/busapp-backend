const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "email":{type:String,required:true},
        "mob":{type:String,required:true},
        "gender":{type:String,required:true},
        "password":{type:String,required:true}
    }
)

let usermodel=mongoose.model("users",schema)
module.exports={usermodel}