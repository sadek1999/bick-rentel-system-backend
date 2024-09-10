import { Router } from "express"
import { bikeRouter } from "../modules/bike/bike.routes"
import { UserRouter } from "../modules/user/user.routes"
import { bookingsRouter } from "../modules/Booking/booking.routes"
import { authRouter } from "../modules/auth/auth.routes"




const router=Router()
const moduleRoutes=[
    {
        path:'/bike',
        router:bikeRouter,
    },
    {
        path:"/user",
        router:UserRouter
    },
    {
        path:"/bookings",
        router:bookingsRouter
    },
    {
        path:"/auth",
        router:authRouter
    }
]

moduleRoutes.forEach((route)=>router.use(route.path ,route.router))

export default router