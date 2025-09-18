import { Pool } from "pg";
import { Database } from "../libs/Database";
// import { Dinosaure } from "./DinosaureRepo";
// import { ResaRepo } from "./ResaRepo";


export abstract class Repository<T> { 
  protected pool: Pool;
  protected abstract tableName: "Dinosaures" | "Reservations" | "Users";
  protected abstract fromRow(row: unknown): T;
  constructor() {
    this.pool = Database.getPool();
  }


  findAll = async (): Promise<T[] | null> => {
    const query = {
      name: `fetch-all-${this.tableName}`,
      text: `select * from ${this.tableName}`,
    };

    try {
      const result = await this.pool.query(query);
      const data = result.rows.map(this.fromRow);

      return data;
    } catch (error) {
      console.error(error);

      return null;
    }
  };
  
}



