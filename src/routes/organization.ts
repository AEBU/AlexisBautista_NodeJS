import express from 'express';
import { organizationController } from '../controllers/organization';

const router = express.Router()

router.get('/getOrganizations', organizationController.getOrganizations);
router.post('/saveOrganization', organizationController.saveOrganization);
router.put('/updateOrganization', organizationController.updateOrganization);
router.delete('/deleteOrganization', organizationController.deleteOrganization);


export default router;