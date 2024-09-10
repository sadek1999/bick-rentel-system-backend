import { z } from "zod";

export const bookingsValidationSchema = z.object({
  body: z.object({
    userId: z.string().min(1, { message: "userId is required" }), // Assuming it's an ObjectId stored as a string
    bikeId: z.string().min(1, { message: "bikeId is required" }), // Assuming it's an ObjectId stored as a string
    startTime: z.string().min(1, { message: "startTime is required" }), // Validating string for now
    returnTime: z.string().min(1, { message: "returnTime is required" }).optional(), // Validating string for now
    totalCost: z.number().min(1, { message: "totalCost is required" }).optional(), // Ensure it's a string and not empty
    isReturned: z.boolean().default(false).optional(), // Ensure it’s a boolean
  }),
});
