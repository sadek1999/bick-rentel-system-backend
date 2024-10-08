import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { SendResponse } from "../../utils/sendResponse";

import { bookingsServices } from "./booking.service";



const createBookingIntoDB=catchAsync(async(req,res)=>{
    const {...data}=req.body;
   
    const result=await bookingsServices.crateBookings(data,req.user);
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"successfully create bookings in database",
        data:result
    })
})

const returnBike=catchAsync(async(req,res)=>{
    const result= await bookingsServices.returnBike({ id:req.params.id})
    
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"bike is returned successfully",
        data:result
    })
})
const getAllBookingsFromDB=catchAsync(async(req,res)=>{
    const  result=await bookingsServices.getAllBookings();
    SendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:'successfully get all bookings from db',
        data:result
    })
})

// const getSingleBookingsFromDB=catchAsync(async(req,res)=>{
//     const result=await bookingsServices.getSingleBookings(req.params.id)
//     SendResponse(res,{
//         success:true,
//         statusCode:httpStatus.OK,
//         message:"successfully get the booking from database",
//         data:result
//     })
// })
// const updateBookingInDB=catchAsync(async(req,res)=>{
//     const result=await bookingsServices.updateBooking(req)
//     SendResponse(res,{
//         success:true,
//         statusCode:httpStatus.OK,
//         message:"successfully update bookings in database",
//         data:result
//     })
// })
// const deleteBookingsFromDB=catchAsync(async(req,res)=>{
//     const result=await bookingsServices.deleteBooking(req.params.id)
//     SendResponse(res,{
//         success:true,
//         statusCode:httpStatus.OK,
//         message:"successfully deleted bookings from database",
//         data:result
//     })
// })
export const bookingsControllers={
    createBookingIntoDB,
    returnBike,
    getAllBookingsFromDB,
    // getSingleBookingsFromDB,
    // updateBookingInDB,
    // deleteBookingsFromDB,

}