import { Router } from 'express';
import { serviceController } from '../controllers/service.controller.js';
import { validateBody } from '../middlewares/validate.middleware.js';
import { serviceSchema } from '../validators/service.validator.js';

const router = Router();

router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getServiceById);
router.post('/', validateBody(serviceSchema), serviceController.createService);
router.put('/:id', validateBody(serviceSchema.partial()), serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

export default router;
