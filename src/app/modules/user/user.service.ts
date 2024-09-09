import { TUser } from "./user.interface"
import { User } from "./user.model"


const createUser=async(payload:TUser)=>{
 const result=await User.create(payload)
 return result;
}
const getAllUsers=async()=>{

}

const getSingleUser=async()=>{

}
const updateUser=async()=>{

}
const deleteUser=async()=>{

}

export const userService={
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}