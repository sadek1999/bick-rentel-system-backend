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

const getAllBikesFromDB=catchAsync(async(req,res)=>{
    const result=await bikeServices.getallBikes(req.query)
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully get all bike from DB",
        data:result
    })
})

const getSingleBikeFromDB=catchAsync(async(req,res)=>{

    const result=await bikeServices.getSingleBike(req.params.id);
    
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully get Single bike from DB",
        data:result
    })
})

const  updateBikeFromDB=catchAsync(async(req,res)=>{
    const result=await bikeServices.updateBike(req.params.id,req.body);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully update the  bike from DB",
        data:result
    })
})

const deleteBikeFromDB=catchAsync(async(req,res)=>{
    const result=await bikeServices.deleteBike(req.params.id);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully delate bike from DB",
        data:result
    })
})

export const bikeController={
    createBikeIntoDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
    updateBikeFromDB,
    deleteBikeFromDB,
}