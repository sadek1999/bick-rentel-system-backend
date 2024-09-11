import express from "express";
import { bookingsControllers } from "./booking.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import { bookingsValidationSchema } from "./booking.validation";
import auth from "../../middlewares/auth";
import { User_Role } from "../user/user.const";

const router = express.Router();

router.post(
  "/",
  ValidateRequest(bookingsValidationSchema),
  bookingsControllers.createBookingIntoDB
);
router.get("/",auth('admin'), bookingsControllers.getAllBookingsFromDB);

router.get("/id",bookingsControllers.getSingleBookingsFromDB);
router.patch("/id",bookingsControllers.updateBookingInDB);
router.delete("/id",bookingsControllers.deleteBookingsFromDB)

export const bookingsRouter = router;
