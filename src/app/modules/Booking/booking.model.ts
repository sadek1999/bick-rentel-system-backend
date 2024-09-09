import { model, Schema } from "mongoose"
import { TBooking } from "./booking.interface"



const bookingSchema=new Schema<TBooking>({
    userId: { type:Schema.Types.ObjectId, ref: 'User', required: true },
    bikeId: { type: Schema. Types.ObjectId, ref: 'Bike', required: true },
    startTime: { type: String, required: true },  // Assuming you want to store as string
    returnTime: { type: String, required: true }, // Assuming you want to store as string
    totalCost: { type: String, required: true },  // Fixed typo from "totalConst" to "totalCost"
    isReturned: { type: Boolean, required: true, default: false }
},{
    timestamps:true,
})

export const Bookings=model <TBooking>('bookings',bookingSchema)