import { Request, Response } from "express";
import { Controller } from "./Controller";
import {Dinosaure} from "../repositories/Dinosaure";


export class AdminController extends Controller{
  
  public chemsPanel() {

    panel:[] = []
    this.response.render(`./pages/panelControl`, {
        panel: [],

    });
  }

  public hemscPanel() {


      const wantedDino = dino.request.params.id ;


    getOneDino();

 this.response.render(`./pages/panelControl`,

  return name,
        regime,
        description,

    );

   }


   public emschPanel() {
     this.response.send("Bienvenue sur l'édition de panel");
  }


   public mscheForm() {
    this.response.render("./pages/adminConnect");
  }



  public schemPanel() {

    
  }

  

 public laurencePanel() {


  
}
}

