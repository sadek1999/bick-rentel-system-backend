import mongoose, { Model } from "mongoose";

export type TBike = {
    _id:mongoose.Types.ObjectId

  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: string;
  year: string;
  model: string;
  brand: string;
}| undefined;

export interface BikeModel extends Model<TBike> {
  isBikeExistById(id: string): Promise<TBike | null>;
}
