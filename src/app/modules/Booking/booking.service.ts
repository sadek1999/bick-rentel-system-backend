import { TBooking } from "./booking.interface";
import { Bookings } from "./booking.model";

const crateBookings = async (payload: TBooking) => {
  const result = await Bookings.create(payload);
  return result;
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
