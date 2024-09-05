import { model, Schema } from "mongoose";
import { TBike } from "./bike.interface";


const bikeSchema=new Schema<TBike>({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    pricePerHour:{
        type:String,
        required:true,
    },
    isAvailable:{
        type:Boolean,
        required:true,
    },
    cc:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
})

export const Bike=model <TBike>("Bike",bikeSchema)