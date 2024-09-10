import { model, Schema } from "mongoose"
import { TBooking } from "./booking.interface"



const bookingSchema=new Schema<TBooking>({
    userId: { type:Schema.Types.ObjectId, ref: 'User', required: true },
    bikeId: { type: Schema. Types.ObjectId, ref: 'Bike', required: true },
    startTime: { type: String, required: true },  
    returnTime: { type: String, required:false }, 
    totalCost: { type: Number, required: false }, 
    isReturned: { type: Boolean, required: true, default: false }
},{
    timestamps:true,
})

export const Bookings=model <TBooking>('bookings',bookingSchema)