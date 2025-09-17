import { Router } from "express";
import globalRouter from "./globalRouter";
import adminRouter from "./adminRouter";
import listeRouter from "./listeRouter";
import resaRouter from "./resaRouter";

const router = Router();

router.use(globalRouter);
router.use(adminRouter);
router.use(listeRouter);
router.use(resaRouter);

export default router;