import { Router } from "express";
import { AdminController } from "../controllers/AdminController";


const adminRouter = Router();

// Browse
adminRouter.get("/panelControl", (request, response) => {
  const controller = new AdminController(request, response);
  controller.browsePanel();
});

// Read
adminRouter.get("", (request, response) => {
  const controller = new AdminController(request, response);
  controller.readPanel()

});


// Add
   adminRouter.post("", (request, response) => {
   const controller = new AdminController(request, response);
   controller.addPanel();
 });

 
// GET Route d affichage formulaire
adminRouter.get("/adminconnect", (request, response) => {
  const controller = new AdminController(request, response);
  controller.showForm(); // oublies pas john! faut la methode en controller sini c useless...
});


 // Delete
adminRouter.delete("", (request, response) => {
  const controller = new AdminController(request, response);
   controller.deletePanel();
 });

export default adminRouter;