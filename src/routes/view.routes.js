import { Router } from 'express';
import { viewController } from '../controllers/view.controller.js';

const router = Router();

router.get('/home', viewController.renderHome);
router.get('/realtime-services', viewController.renderRealTimeServices);

export default router;
