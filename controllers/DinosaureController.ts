import { Controller } from "./Controller";
import { DinosaureRepo} from "../repositories/DinosaureRepo";
import  {Repository} from "../repositories/Repository"
import {Dinosaures }from "../models/dinosaures"
 import { safeParse, z } from 'zod';


     const ResaSchema = z.object ({
  
         name: z.string().max(100),
         date: z.date(),
         forfait: z.string(),
         nombre: z.number().max(50),

 });

 const resas = [];//ailleurs;

export class DinosaureController extends Controller{
  
  public async browseDino() {

    
    const repodino = new DinosaureRepo();
    const liste = await repodino.findAll();
    this.response.render(`./liste`, {
         
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
        this.response.send('Resarvation succeed!!').render('./home')
  
  }
       else {this.response.render('./reservation',{

        tiensTonReste: this.request.body
       }

       
       );}

  }


   public showForm() {
    this.response.render("");
  }

  public deleteDino() {

    
  }

  

 public laurenceDino() {

  
};
   }

