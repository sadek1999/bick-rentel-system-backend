import express from "express";
import { authController } from "./auth.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import {
  changePasswordValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema,
} from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  ValidateRequest(loginValidationSchema),
  authController.LoginUser
);
router.post(
  "/change-password",
  ValidateRequest(changePasswordValidationSchema),
  authController.changePassword
);
router.post(
  "/refresh-token",
  ValidateRequest(refreshTokenValidationSchema),
  authController.createRefreshToken
);

export const authRouter = router;
