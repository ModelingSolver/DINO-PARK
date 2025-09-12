export interface ReservationTypeRow {
  id_Reservation: number | null;
  Date: Date;

}

export class Reservation {
  protected id_Reservation: number | null;
  protected Date: Date;

  constructor(id: number | null, name: string) {
    this.id_Reservation = id_Reservation;
    this.Date = Date;
  
  }

  static fromRow(row: ReservationTypeRow): Reservation {
    return new Reservation(row.id_Reservation, row.Date);
  }

  getReservation_id() {
    return this.id_Reservations;
  }

  getDate() {
    return this.Date;
  }
}