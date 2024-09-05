
import  express  from 'express';
import { bikeController } from './bike.controller';

const router=express.Router()

router.post('/',bikeController.createBikeIntoDB)

export const bikeRouter=router