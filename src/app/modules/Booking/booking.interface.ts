import { Model, Types } from "mongoose";

export type TBooking={
    userId?:Types.ObjectId;
    bikeId:Types.ObjectId;
    startTime?:string;
    returnTime?:string;
    totalCost?:number;
    isReturned?:boolean;
    
}

export interface bookingMode extends Model<TBooking>{
  isBookingExistById(id:string):Promise<TBooking|undefined>
}