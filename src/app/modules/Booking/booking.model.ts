import { model, Schema } from "mongoose"
import { bookingMode, TBooking } from "./booking.interface"



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

bookingSchema.statics.isBookingExistById=async function (id:string) {
    return await Bookings.findById(id)
}

export const Bookings=model <TBooking,bookingMode>('bookings',bookingSchema)