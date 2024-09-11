import express from "express";
import { authController } from "./auth.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import { loginValidationSchema } from "./auth.validation";
import { userValidationSchema } from "../user/user.validation";

const router = express.Router();

router.post(
  "/login",
  ValidateRequest(loginValidationSchema),
  authController.LoginUser
);

router.post(
  "/singUp",
  ValidateRequest(userValidationSchema),
  authController.singUpUser
);

export const authRouter = router;
