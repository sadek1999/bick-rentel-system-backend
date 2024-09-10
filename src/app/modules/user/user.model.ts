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

// userSchema.pre("save",async function (next)=>{
// let user=this
// user.password=bcrypt.hash(user.password, saltRounds)
// next()
// })

userSchema.pre('save',async function (Next) {
    let user=this;
    user.password=await bcrypt.hash(user.password,Number(config.saltRound));
    Next()

})

export const User=model<TUser>("user",userSchema)