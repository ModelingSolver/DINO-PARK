import { Router } from "express";
import { DinosaureController } from "../controllers/DinosaureController";

const router = Router();

router.get("/reservation", (req, res) => {
    const controller = new DinosaureController(req, res);
    controller.showForm();
});

router.post("/reservation", (req, res) => {
    const controller = new DinosaureController(req, res);
    controller.addResa();
});

export default router;
