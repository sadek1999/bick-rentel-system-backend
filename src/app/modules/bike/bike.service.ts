
import { TBike } from "./bike.interface"
import { Bike } from "./bike.model"


const createBike=async(payload:TBike)=>{
const result=await Bike.create(payload);
return result

}

const getallBikes=async()=>{
    const result=await Bike.find();
    return result

}
const getSingleBike=async()=>{
    const result=await Bike.find();
    return result;
}
const deleteBike=async()=>{

}
const updateBike=async()=>{

}

export const bikeServices={
    createBike,
    getallBikes,
    getSingleBike,
    deleteBike,
    updateBike,
}