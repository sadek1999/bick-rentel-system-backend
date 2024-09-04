import jwtPayload from "jsonwebtoken"

declare global{
    namespace express{
        interface Request{
            use:jwtPayload
        }
    }
}