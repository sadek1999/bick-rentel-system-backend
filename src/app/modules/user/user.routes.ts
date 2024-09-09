import express from "express";
import ValidateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";
import { userController } from "./user.controller";

const router = express.Router();

router.post(
  "/",
  ValidateRequest(userValidationSchema),
  userController.createUserIntoDB
);

router.get("/",userController.getAllUsersFromDB)
router.get("/id",userController.getSingleUserFromDB)
router.patch("/id",userController.updateUserInDB)
router.delete("/id",userController.deleteUserFromDB)

export const UserRouter = router;
