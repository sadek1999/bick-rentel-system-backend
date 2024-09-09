import { z } from "zod";



export const bikeValidationSchema=z.object({
 body:z.object({
   
    model:z.string({required_error:"model is required"}),
    brand:z.string({required_error:"brand is required"}),
    year:z.string({required_error:"year is required"}),
    isAvailable:z.boolean({required_error:"isAvailable is required"}),
    cc:z.string({required_error:"cc is required"}),
    pricePerHour:z.number({required_error:"pricePerHour is required"}),
    description:z.string({required_error:"description is required"}),
    name:z.string({required_error:'name is required'}),

    
 })
 
})
