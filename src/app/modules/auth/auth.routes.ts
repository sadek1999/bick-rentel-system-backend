
import  express  from 'express';
import { authController } from './auth.controller';

const router=express.Router()

router.post('/login',authController.LoginUser)
router.post('/change-password',authController.changePassword)
router.post("/refresh-token",authController.createRefreshToken)

export const authRouter=router;