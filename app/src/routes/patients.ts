import express, { Router } from 'express';
import { PatientsController } from 'src/controllers/PatientsController';

const router: Router = express.Router();

router.post('/', PatientsController.create);
router.get('/list', PatientsController.list);
router.get('/:id', PatientsController.show);
router.delete('/:id', PatientsController.delete);

export default router;
