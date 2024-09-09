
import  express  from 'express';
import { bikeController } from './bike.controller';
import ValidateRequest from '../../middlewares/validateRequest';
import { bikeValidationSchema } from './bike.validation';

const router=express.Router()

router.post('/',ValidateRequest(bikeValidationSchema) ,bikeController.createBikeIntoDB)
router.get("/",bikeController.getAllBikesFromDB);
router.get("/bikeId",bikeController.getSingleBikeFromDB)
router.patch("/bikeId",bikeController.updateBikeFromDB)
router.delete("/bikeId",bikeController.deleteBikeFromDB)


export const bikeRouter=router