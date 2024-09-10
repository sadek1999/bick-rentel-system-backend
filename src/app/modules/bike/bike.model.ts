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
        type:Number,
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
        unique:true,
    },
    brand:{
        type:String,
        required:true,
    },
},{
 timestamps:true,
})

export const Bike=model <TBike>("Bike",bikeSchema)