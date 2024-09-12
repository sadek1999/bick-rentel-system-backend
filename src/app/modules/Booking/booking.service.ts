import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";

import { Bookings } from "./booking.model";
import { Bike } from "../bike/bike.model";

import { TBooking } from "./booking.interface";
import mongoose from "mongoose";

const crateBookings = async (payload) => {
  // console.log(payload.body);
  const bookingData: Partial<TBooking> = {};
  bookingData.bikeId = payload?.body.bikeId;

  bookingData.startTime = payload?.body.startTime;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const user = await User.isUserExistsByEmail(payload?.user.userEmail);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "user is not found");
    }

    const bike = await Bike.isBikeExistById(payload.body.bikeId);

    if (!bike) {
      throw new AppError(httpStatus.NOT_FOUND, "Bike is not found in db");
    }
    if(!bike.isAvailable){
      throw new AppError(httpStatus.FORBIDDEN,"Bike is not available")
    }

    bookingData.userId = user?._id;

    const createBooking = await Bookings.create([bookingData], { session });
    if (!createBooking) {
      throw new AppError(httpStatus.BAD_REQUEST, "Fail to create booking");
    }

    const updateBike = await Bike.findByIdAndUpdate(
      payload.body.bikeId,
      { isAvailable: false },
      { new: true, session }
    );
    if (!updateBike) {
      throw new AppError(httpStatus.BAD_REQUEST, "Fail to update bike ");
    }

    await session.commitTransaction();
    await session.endSession();
    return createBooking;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const returnBike = async (payload) => {
  const { id } = payload;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const booking = await Bookings.isBookingExistById(id);
    if (!booking) {
      throw new AppError(httpStatus.NOT_FOUND, "Felid to find booking");
    }
    const bike = await Bike.isBikeExistById(booking?.bikeId);
    if (!bike) {
      throw new AppError(httpStatus.NOT_FOUND, "Felid to find the bike");
    }
    const startTimeInString = booking.startTime;

    const startTimeInDate = new Date(startTimeInString);

    const returnTime = new Date();

    const totalTime = (returnTime - startTimeInDate) / (1000 * 60 * 60);

    booking.returnTime = returnTime.toISOString();
    booking.totalCost = Math.round(bike?.pricePerHour * totalTime);
    booking.isReturned=true;

    const updateBooking = await Bookings.findByIdAndUpdate(id, booking, {
      new: true,
      session,
    });
    const bikeId=bike?.id

    const updateBike = await Bike.findByIdAndUpdate(
      bikeId,
      {
        isAvailable: true,
      },
      {
        new: true,
        session,
      }
    );
    if(!updateBike){
      throw new AppError(httpStatus.FORBIDDEN,'Bike is not updated')
    }

    await session.commitTransaction();
    await session.endSession();
  
    return{ updateBooking };
  } catch (err: any) {
    // console.log(err)
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw new Error(err);
    
  }
  finally{
    session.endSession();
  }
};

const getAllBookings = async () => {
  const result = await Bookings.find();
  return result;
};
const getSingleBookings = async () => {};
const updateBooking = async () => {};
const deleteBooking = async () => {};

export const bookingsServices = {
  crateBookings,
  getAllBookings,
  getSingleBookings,
  updateBooking,
  deleteBooking,
  returnBike,
};
