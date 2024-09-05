import { Router } from "express"
import { bikeRouter } from "../modules/bike/bike.routes"



const router=Router()
const moduleRoutes=[
    {
        path:'/bike',
        router:bikeRouter,
    }
]

moduleRoutes.forEach((route)=>router.use(route.path ,route.router))

export default router