import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import config from "../../config";
import { createToken } from "./auth.utills";

const Login = async (payLoad: TUser) => {
  const { email } = payLoad;
  const user = await User.isUserExistsByEmail(email);
  //   console.log(user)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User is not found");
  }
  if (user.isDelete == true) {
    throw new AppError(httpStatus.FORBIDDEN, "user is deleted");
  }

  // console.log(user.password)
  if (!(await User.isPasswordMatch(payLoad.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "unauthorized user");
  }

  const jsonPayload = {
    userEmail: user?.email,
    role: user?.password,
  };

  const accessToken = createToken(
    jsonPayload,
    config.access_secret as string,
    config.jwt_access_expire_in as string
  );
  
  return {
    user,
    accessToken,
  };
};

const singUp = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};

export const authServices = {
  Login,
  singUp,
};
