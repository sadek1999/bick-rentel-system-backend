import express from "express";
import ValidateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import { User_Role } from "./user.const";

const router = express.Router();

router.post(
  "/",
  ValidateRequest(userValidationSchema),
  userController.createUserIntoDB
);

router.get("/", userController.getAllUsersFromDB);
router.get("/:id",
   auth(User_Role.admin,User_Role.user),
 userController.getSingleUserFromDB);
router.patch("/:id",auth('admin',"user"), userController.updateUserInDB);
router.delete("/:id",auth('admin'), userController.deleteUserFromDB);

export const UserRouter = router;
