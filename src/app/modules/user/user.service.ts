import QueryBuilder from "../../builder/QueryBuilder";
import { userSearchTerm } from "./user.const";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};
const getAllUsers = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(userSearchTerm)
    .fields()
    .filter()
    .sort()
    .paginate();
  const result = await userQuery.modelQuery;
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const updateUser = async (id:string ,payload:Partial<TUser>) => {
    const result=await User.findByIdAndUpdate(id,payload,{new:true})
    return result 
};
const deleteUser = async (id:string) => {
    const result=await User.findByIdAndUpdate(id,{isDelete:true},{new:true})
    return result;
};

export const userService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
