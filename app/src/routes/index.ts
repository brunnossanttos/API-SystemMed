import express, { Router } from "express";
import patientsRoutes from "./patients";
import hospitalsRoutes from "./hospitals";

const router: Router = express.Router();

router.use("/patients", patientsRoutes);
router.use("/hospitals", hospitalsRoutes);

export default router;
