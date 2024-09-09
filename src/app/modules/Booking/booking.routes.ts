import express from "express";
import { bookingsControllers } from "./booking.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import { bookingsValidationSchema } from "./booking.validation";

const router = express.Router();

router.post(
  "/",
  ValidateRequest(bookingsValidationSchema),
  bookingsControllers.createBookingIntoDB
);
router.get("/", bookingsControllers.getAllBookingsFromDB);

router.get("/id",bookingsControllers.getSingleBookingsFromDB);
router.patch("/id",bookingsControllers.updateBookingInDB);
router.delete("/id",bookingsControllers.deleteBookingsFromDB)

export const bookingsRouter = router;
