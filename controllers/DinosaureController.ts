import { Controller } from "./Controller";
import { DinosaureRepo} from "../repositories/DinosaureRepo";
import  { Repository } from "../repositories/Repository"
import  { ResaRepo } from "../repositories/ResaRepo"
import { Dinosaures }from "../models/dinosaures"
import { Reservation }from "../models/reservations"
 import { safeParse, z } from 'zod';

const ResaSchema = z.object({
  name: z.string().max(100),
  date: z.preprocess((val) => new Date(val as string), z.date()),
  forfait: z.string(),
  nombre: z.preprocess((val) => Number(val), z.number().max(50)),
});

 const resas = [];//hors scope ?! i hope!

export class DinosaureController extends Controller{
  
  public async browseDino() {

    
    const repodino = new DinosaureRepo();
    const liste = await repodino.findAll() || [];
    this.response.render(`pages/liste`, {
         
          dinos: liste

    })


    }
 
  public readDino() {

   }

   
public async addResa() {
  const formData = this.request.body;
  const valide = ResaSchema.safeParse(formData);

  if (valide.success) {
    const newResa = {
      id: resas.length + 1,
      name: formData.name,
      date: formData.date,
      forfait: formData.forfait,
      nombre: formData.nombre,
    };

    // garde stockage local
    resas.push(newResa);

    try {
      const resaRepo = new ResaRepo();

      const reservation = new Reservation(
        null,                      
        new Date(formData.date),   
        1                          
      );

      await resaRepo.createResa(reservation);
      console.log("Résa en db OK!!");
    } catch (err) {
      console.error("Erreur Résa DB", err);
    }

    this.response.render("pages/home", { message: "Reservation effectuée!" });
  } else {
    this.response.render("pages/reservation", {
      tiensTonReste: this.request.body,
      errors: valide.error.format(),
    });
  }
}
  


   public showForm() {
    this.response.render("pages/reservation");
  }

  public deleteDino() {

    
  }

  

 public laurenceDino() {

  
};
   }

