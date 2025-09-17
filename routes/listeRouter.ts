import { Router } from "express";
import { DinosaureController } from "../controllers/DinosaureController";



const listeRouter = Router();

// Browse
listeRouter.get("/liste", (request, response) => {
  const controller = new DinosaureController(request, response);
  controller.browseDino();
});

export default listeRouter;