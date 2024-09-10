

import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import {  JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { User } from "../modules/user/user.model";
import  jwt  from 'jsonwebtoken';
import { TUserRole } from "../modules/user/user.interface";
import { jwtPayload } from 'jsonwebtoken';



const auth = (...requiredRoles :TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //   validation
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are  unauthorize user");
    }
    // Verified Token

      const decoded = jwt.verify(token,
        config.access_secret as string) as JwtPayload;
        const{role,userId,iat}=decoded
        

        const user = await User.isUserExistsByCustomId(userId);
        // console.log(user)
      
        if (!user) {
          throw new AppError(httpStatus.NOT_FOUND, "This user is not found !!");
        }
      
        if (user?.isDeleted) {
          throw new AppError(httpStatus.NOT_FOUND, "This user already Deleted");
        }
        if (user?.status === "block") {
          throw new AppError(httpStatus.FORBIDDEN, "This user block ");
        }
        

        // if(user.passwordChangeDate && User.isJwtCreateBeforePasswordChange(
        //   user.passwordChangeDate ,iat as number
        // )){
        //   throw new AppError(httpStatus.UNAUTHORIZED,'you are not authorized')
          
        // }
        if (
            user.passwordChangedAt &&
            User.isJWTIssuedBeforePasswordChanged(
              user.passwordChangedAt,
              iat as number,
            )
          ) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
          }
      

        if(requiredRoles && !requiredRoles.includes(role)){
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                "you are unauthorize user"
              );  
        }
        req.user=decoded 
        
        next();
    

   
   
  });
};

export default auth;
