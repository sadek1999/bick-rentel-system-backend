import { Model } from "mongoose";
import { User_Role } from "./user.const";

export type TUser={
    name:string;
    email:string;
    password:string;
    phone:string;
    address:string;
    role:"admin"|"user";
    isDelete:boolean;
}

export type TUserRole=keyof typeof User_Role

// userSchema.statics.isUserExistsByCustomId = async function (id: string) {
//     return await User.findOne({ id }).select("+password");
//   };


export interface UserModel extends Model<TUser>{
    isUserExistsByEmail(email:string):Promise<TUser|null>
}