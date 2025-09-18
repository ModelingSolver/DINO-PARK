import { Repository } from "./Repository";

export class ResaRepo extends Repository<Reservations>{
  protected tableName = "Reservations" as const;
 protected fromRow = Reservations.fromRow;

 



 



  
   

 

}
