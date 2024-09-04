import { Router } from "express"



const router=Router()
const moduleRoutes=[
    {
        path:'/',
        router:encodeURIComponent,
    }
]

moduleRoutes.forEach((route)=>router.use(route.path ,route.router))

export default router