import { Router } from "express"
import { bikeRouter } from "../modules/bike/bike.routes"
import { UserRouter } from "../modules/user/user.routes"




const router=Router()
const moduleRoutes=[
    {
        path:'/bike',
        router:bikeRouter,
    },
    {
        path:"/user",
        router:UserRouter
    }
]

moduleRoutes.forEach((route)=>router.use(route.path ,route.router))

export default router