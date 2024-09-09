import { Router } from "express"
import { bikeRouter } from "../modules/bike/bike.routes"
import { UserRouter } from "../modules/user/user.routes"
import { bookingsRouter } from "../modules/Booking/booking.routes"




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
    }
]

moduleRoutes.forEach((route)=>router.use(route.path ,route.router))

export default router