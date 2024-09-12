import express from "express";
import { bookingsControllers } from "./booking.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import { bookingsValidationSchema } from "./booking.validation";
import auth from "../../middlewares/auth";


const router = express.Router();

router.post(
  "/",
  auth('admin'),
  ValidateRequest(bookingsValidationSchema),
  bookingsControllers.createBookingIntoDB
);
router.get("/",auth('admin'), bookingsControllers.getAllBookingsFromDB);
router.put('/:id/return',auth('admin'),bookingsControllers.returnBike)

router.get("/id",bookingsControllers.getSingleBookingsFromDB);
router.patch("/id",bookingsControllers.updateBookingInDB);
router.delete("/id",bookingsControllers.deleteBookingsFromDB)

export const bookingsRouter = router;
