import { Dinosaures, DinosauresTypeRow } from "../models/dinosaures";
import { Repository } from "./Repository";

export class DinosaureRepo extends Repository<Dinosaures>{
  protected tableName = "Dinosaures" as const;
 protected fromRow = Dinosaures.fromRow;

 



 

  // chocolatId() {
  //   return this.id;
  // }

  // vanilleName() {
  //   return this.name;
  // }

  // fraiseRegime() {
  //   return this.regime;
  // }

  // citronDescription() {
  //   return this.description
  // }

  
   

 

}
