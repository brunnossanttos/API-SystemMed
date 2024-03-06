import express, { Router } from "express";
import { HospitalsController } from "src/controllers/HospitalsController";

const router: Router = express.Router();

router.post("/", HospitalsController.create);
router.get("/list", HospitalsController.list);

export default router;
