import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/user/user.model";
import jwt from "jsonwebtoken";
import { TUserRole } from "../modules/user/user.interface";

 interface AuthenticatedRequest extends Request {
  user?: any;
}


const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //   validation
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are  unauthorize user");
    }
    // Verified Token

    const decoded = jwt.verify(
      token,
      config.access_secret as string
    ) as JwtPayload;
    const { role, userEmail } = decoded;

    // console.log(role, requiredRoles);

    const user = await User.isUserExistsByEmail(userEmail);
    // console.log(user)

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !!");
    }

    if (user?.isDelete) {
      throw new AppError(httpStatus.NOT_FOUND, "This user already Deleted");
    }

    // console.log(requiredRoles && !(requiredRoles).includes(role))

      if(requiredRoles && !requiredRoles.includes(role)){
        throw new AppError(
            httpStatus.UNAUTHORIZED,
            "you are unauthorize user"
          );
    }
    

    

   
    (req as AuthenticatedRequest).user = decoded;

    next();
  });
};

export default auth;
