
const { default: mongoose } = require("mongoose");


const Userauthschema=new mongoose.Schema({name:{type:String,required:true},

    collage:{type:String,required:true},  email:{type:String ,required:true,unique:true},password:{type:String,required:true}  });
 export const UserauthModel= mongoose.models.alluser|| mongoose.model("alluser",Userauthschema)