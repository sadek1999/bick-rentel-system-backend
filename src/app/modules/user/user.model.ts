import {  model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt"
import { number } from "zod";
import config from "../../config";


const userSchema=new Schema<TUser>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,},
    password:{type:String,required:true},
    phone:{type:String,required:true,unique:true},
    address:{type:String,required:true},
    role:{type:String,enum:["admin","user"],required:true},
    isDelete:{type:Boolean,default:false,}

    
},{
    timestamps:true,
})


// change the password plain text ot hash before save 
userSchema.pre('save',async function (Next) {
    let user=this;
    user.password=await bcrypt.hash(user.password,Number(config.saltRound));
    Next()

})
//
userSchema.post("save", function (doc, next) {
    doc.password = "";
  
    next();
  });

export const User=model<TUser>("user",userSchema)