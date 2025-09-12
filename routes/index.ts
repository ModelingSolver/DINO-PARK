import { Router } from "express";
import globalRouter from "./globalRouter";
import adminRouter from "./adminRouter";


const router = Router();

router.use(globalRouter);
router.use(adminRouter);

export default router;