import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SendResponse } from "../../utils/sendResponse";
import { userService } from "./user.service";



const createUserIntoDB=catchAsync(async(req,res)=>{
    const result=await userService.createUser(req.body);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully created user",
        data:result
    })
})

const getAllUsersFromDB=catchAsync(async(req,res)=>{
    const result=await userService.getAllUsers({})
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully getAll user",
        data:result
    })
})
const getSingleUserFromDB=catchAsync(async(req,res)=>{
    const result=await userService.getSingleUser(req.params.id)
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully get the  user",
        data:result
    })
})

const updateUserInDB=catchAsync(async(req,res)=>{
    const result=await userService.updateUser(req.params.id,req.body)
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully update the user",
        data:result
    })
})

const deleteUserFromDB=catchAsync(async(req,res)=>{
    const result=await userService.deleteUser(req.params.id)
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully delete the  user",
        data:result
    })
})

export const userController={
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserInDB,
    deleteUserFromDB
}