import { Request, Response } from "express";
import { Controller } from "./Controller";
import {Dinosaure} from "../repositories/DinosaureRepo";


export class AdminController extends Controller{
  
  public browsePanel() {

    panel:[] = []
    this.response.render(`./pages/panelControl`, {
        panel: [],

    });
  }

  public readPanel() {


   }


   public addPanel() {
     this.response.send("Bienvenue sur l'édition de panel");
  }


   public showForm() {
    this.response.render("./pages/adminConnect");
  }



  public deletePanel() {

    
  }

  

 public laurencePanel() {


  
}
}

