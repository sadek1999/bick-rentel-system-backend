import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SendResponse } from "../../utils/sendResponse";
import { authServices } from "./auth.service";




const LoginUser=catchAsync(async(req,res)=>{
    const result=await authServices.Login();

    SendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"successfully login user",
        data:result
    })
})

const createRefreshToken=catchAsync(async(req,res)=>{
    const result=await authServices.refreshToken()
    SendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"successfully create refresh toke for user",
        data:result
    })
})

const changePassword=catchAsync(async(req,res)=>{
    const result= await authServices.changPassword()
    SendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"successfully change Password ",
        data:result
    })
})

export const authController={
    LoginUser,
    createRefreshToken,
    changePassword,
}