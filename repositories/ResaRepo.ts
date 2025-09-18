import { Repository } from "./Repository";
import { Reservation } from "../models/reservations";

export class ResaRepo extends Repository<Reservation> {
  protected tableName = "Reservations" as const;
  protected fromRow = Reservation.fromRow;

  createResa = async (reservation: Reservation): Promise<Reservation | null> => {
    const query = {
      name: "create-reservation",
      text: `
        INSERT INTO "Reservations" ("Date_de_resa", "id")
        VALUES ($1, $2)
        RETURNING *;
      `,
      values: [reservation.getDate(), reservation.getUserId()],
    };

    try {
      const result = await this.pool.query(query);
      const data = this.fromRow(result.rows[0]);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}