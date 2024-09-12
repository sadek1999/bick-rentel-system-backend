import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";

import { Bookings } from "./booking.model";
import { Bike } from "../bike/bike.model";

const crateBookings = async (payload) => {
  console.log(payload.body)

  const user=await User.isUserExistsByEmail(payload?.user.userEmail)
  if(!user){
    throw new AppError(httpStatus.NOT_FOUND,'user is not found')
  }

  const bike=await Bike.isBikeExistById(payload.body.bikeId)
  
  if(!bike){
    throw new AppError(httpStatus.NOT_FOUND,"This Bike is not available")
  }

  
  const data={
    userId:user?._id,
    bikeId:payload?.body.bikeId,
    startTime:payload?.body.startTime,
    returnTime:null,
  }
  // console.log(data)

  const result = await Bookings.create(data);
  return result;
  // return null
};

const getAllBookings=async()=>{
  
    const result=await Bookings.find()
    return result
}
const getSingleBookings=async()=>{
    
}
const updateBooking=async()=>{

}
const deleteBooking=async()=>{

}

export const bookingsServices={
    crateBookings,
    getAllBookings,
    getSingleBookings,
    updateBooking,
    deleteBooking,
}
