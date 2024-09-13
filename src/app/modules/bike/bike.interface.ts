import { Model} from "mongoose"

export type TBike={
    name:string
    description:string,
    pricePerHour:number,
    isAvailable:boolean,
    cc:string,
    year:string,
    model:string,
    brand:string
}

 export interface BikeModel extends Model<TBike>{
    isBikeExistById(id:string):Promise<TBike |null>;
 }
