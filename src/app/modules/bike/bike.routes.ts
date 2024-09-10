
import  express  from 'express';
import { bikeController } from './bike.controller';
import ValidateRequest from '../../middlewares/validateRequest';
import { bikeValidationSchema } from './bike.validation';

const router=express.Router()

router.post('/',ValidateRequest(bikeValidationSchema) ,bikeController.createBikeIntoDB)
router.get("/",bikeController.getAllBikesFromDB);
router.get("/:id",bikeController.getSingleBikeFromDB)
router.patch("/:id",bikeController.updateBikeFromDB)
router.delete("/:id",bikeController.deleteBikeFromDB)


export const bikeRouter=router