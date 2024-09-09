import { z } from "zod";

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password is required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    role: z.enum(["admin", "user"], { message: "Invalid role" }),
    isDelete: z.boolean().optional().default(false),
  }),
});
