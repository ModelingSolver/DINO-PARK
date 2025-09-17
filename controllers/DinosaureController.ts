import { Controller } from "./Controller";
import { DinosaureRepo} from "../repositories/DinosaureRepo";
import  {Repository} from "../repositories/Repository"
import {Dinosaures }from "../models/dinosaures"
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

   public addResa() {

        const formData = this.request.body;
        const valide = ResaSchema.safeParse(formData)
        if (valide.success){
        const newResa = {
        id: resas.length + 1, // Creer un id unique
        name: formData.name,
        date: formData.date,
        nombre: formData.nombre,
    };
        resas.push(newResa);
        this.response.render('pages/home', { message: 'Reservation succeeded!' });
  
  }
       else {this.response.render('pages/reservation',{

        tiensTonReste: this.request.body
       }

       
       );}

  }


   public showForm() {
    this.response.render("pages/reservation");
  }

  public deleteDino() {

    
  }

  

 public laurenceDino() {

  
};
   }

