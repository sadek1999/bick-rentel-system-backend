import express from "express";
import { bikeController } from "./bike.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import { bikeValidationSchema } from "./bike.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  auth('admin'),
  ValidateRequest(bikeValidationSchema),
  bikeController.createBikeIntoDB
);
router.get("/",auth('admin','user'), bikeController.getAllBikesFromDB);
router.get("/:id", auth('admin','user'),bikeController.getSingleBikeFromDB);
router.patch("/:id",auth('admin'), bikeController.updateBikeFromDB);
router.delete("/:id",auth('admin'), bikeController.deleteBikeFromDB);

export const bikeRouter = router;
