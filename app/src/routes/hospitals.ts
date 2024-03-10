import express, { Router } from 'express';
import { HospitalsController } from 'src/controllers/HospitalsController';

const router: Router = express.Router();

router.post('/', HospitalsController.create);
router.get('/list', HospitalsController.list);
router.get('/:id', HospitalsController.show);
router.delete('/:id', HospitalsController.delete);

export default router;
