import express from 'express';
import { metricController } from '../controllers/metrics';

const router = express.Router()

router.post('/saveMetric',  metricController.saveMetric);
router.get('/getMetricRepository/:tribeId/:fecha/:state/:percentage',  metricController.getMetricsRepository);


export default router;