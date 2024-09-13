import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SendResponse } from "../../utils/sendResponse";
import { authServices } from "./auth.service";





const LoginUser=catchAsync(async(req,res)=>{
    const result=await authServices.Login(req.body);

    const {accessToken, UserData }=result
    
    
      res.status(httpStatus.OK).json({
        success:true,
        statusCode:httpStatus.OK,
        message:'User logged in successfully',
        token:accessToken,
        data: UserData
      })

  
})
const singUpUser=catchAsync(async(req,res)=>{
    const result= await authServices.singUp(req.body)

    SendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"User registered successfully",
        data:result
    })
})



export const authController={
    LoginUser,
    singUpUser,
    
}