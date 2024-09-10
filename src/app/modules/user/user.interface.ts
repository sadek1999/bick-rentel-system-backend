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