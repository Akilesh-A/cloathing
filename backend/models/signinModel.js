const mongoose=require("mongoose")
const signinSchema=new mongoose.Schema({
    email:String,
    password:String,
    createdAt:Date
});

const signinModel=mongoose.model("Signin",signinSchema);

module.exports=signinModel;