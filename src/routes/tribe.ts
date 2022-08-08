import express from 'express';
import { tribeController } from '../controllers/tribe';

const router = express.Router()

router.post('/saveTribe',  tribeController.saveTribe);
router.get('/generateReport/:tribeId',  tribeController.generateReportTribe);


export default router;