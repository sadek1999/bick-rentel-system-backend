import {  model, Schema } from "mongoose";
import { TUser } from "./user.interface";


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

export const User=model<TUser>("user",userSchema)