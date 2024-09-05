import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SendResponse } from "../../utils/sendResponse";
import { bikeServices } from "./bike.service";



const createBikeIntoDB=catchAsync(async(req,res)=>{
    const result=await bikeServices.createBike(req.body)

    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully create bike in DB",
        data:result
    })
})

export const bikeController={
    createBikeIntoDB
}