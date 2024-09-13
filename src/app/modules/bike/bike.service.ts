import QueryBuilder from "../../builder/QueryBuilder";
import { bikeSearchableFields } from "./bike.const";
import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBike = async (payload: TBike) => {
  const result = await Bike.create(payload);
  return result;
};

const getallBikes = async (query: Record<string, unknown>) => {
  const bikeQuery = new QueryBuilder(Bike.find(), query)
    .search(bikeSearchableFields)
    .fields()
    .filter()
    .paginate()
    .sort();
  const result = await bikeQuery.modelQuery;
  return result;
};
const getSingleBike = async (id:string) => {
  // console.log(id)
  const result = await Bike.findById(id);
  return result;
};

const deleteBike = async (id:string) => {

  const result= await Bike.findByIdAndUpdate(id,{isAvailable:false},{new:true})
  return result;
};

const updateBike = async (id:string,payload:Partial<TBike>) => {
//  console.log(id,payload)
 const result=await Bike.findByIdAndUpdate(id,payload,{new:true})
 return result;
};

export const bikeServices = {
  createBike,
  getallBikes,
  getSingleBike,
  deleteBike,
  updateBike,
};
