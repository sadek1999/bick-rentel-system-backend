import { model, Schema } from "mongoose";
import { BikeModel, TBike } from "./bike.interface";


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


bikeSchema.pre(["find","findOne"],async function (next) {
    this.where({isAvailable:{$ne:false}})
    next()
    
})



bikeSchema.pre("aggregate",function(next){
    this.pipeline().unshift({$match:{isAvailable:{$ne:false}}})
    next()
})

bikeSchema.statics.isBikeExistById=async function (id:string) {
    return await Bike.findById(id)
}

export const Bike=model <TBike,BikeModel>("Bike",bikeSchema)