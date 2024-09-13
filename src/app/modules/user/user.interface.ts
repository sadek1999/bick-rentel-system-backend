import mongoose, { Model } from "mongoose";
import { User_Role } from "./user.const";


export type TUser={
    _id:mongoose.Types.ObjectId
    name:string;
    email:string;
    password:string;
    phone:string;
    address:string;
    role:"admin"|"user";
    isDelete:boolean;
}

export type TUserRole=keyof typeof User_Role




export interface UserModel extends Model<TUser>{
    isUserExistsByEmail(email:string):Promise<TUser|null>;
    isPasswordMatch(plaintextPassword:string,hashPassword:string):Promise<boolean>
}