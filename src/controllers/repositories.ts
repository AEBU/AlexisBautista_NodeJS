import express from 'express';
import { repositoryController } from '../controllers/repository';

const router = express.Router()

router.get('/getRepositories',  repositoryController.getRepositories);
router.post('/saveRepository',  repositoryController.saveRepository);


export default router;