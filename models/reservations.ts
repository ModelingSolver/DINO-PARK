export interface ReservationTypeRow {
  id_Reservation: number | null;
  Date_de_resa: Date;
  id: number; 
}

export class Reservation {
  protected id_Reservation: number | null;
  protected Date_de_resa: Date;
  protected id: number;

  constructor(id_Reservation: number | null, Date_de_resa: Date ,id: number) {
    this.id_Reservation = id_Reservation;
    this.Date_de_resa = Date_de_resa;
    this.id = id; 
  }

  static fromRow(row: ReservationTypeRow): Reservation {
    return new Reservation(row.id_Reservation, row.Date_de_resa, row.id);
  }

  getReservation_id() {
    return this.id_Reservation;
  }

  getDate() {
    return this.Date_de_resa;
  }

    getUserId() {
    return this.id;
  }
  
}