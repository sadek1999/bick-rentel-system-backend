import { model, Schema } from "mongoose"
import { TBooking } from "./booking.interface"



const bookingSchema=new Schema<TBooking>({
    userId: { type:Schema.Types.ObjectId, ref: 'User' },
    bikeId: { type: Schema. Types.ObjectId, ref: 'Bike', required: true },
    startTime: { type: String ,required:true },  
    returnTime: { type: String, required:false ,default:null }, 
    totalCost: { type: Number, required: true ,default:0 }, 
    isReturned: { type: Boolean, required: true, default: false }
},{
    timestamps:true,
})

export const Bookings=model <TBooking>('bookings',bookingSchema)