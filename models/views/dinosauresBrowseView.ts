import { Dinosaures } from "../dinosaures";


export interface DinosauresBrowseViewTypeRow {
  id: number | null;
  name: string;
  regime: string;
  description: string;
}

export class DinosauresBrowseView extends Dinosaures {


  constructor(
    id: number | null,
    name: string,
    regime: string,
    desription: string,
  ) {
    super(id, name, regime, desription);


  }

  static fromRow(row: DinosauresBrowseViewTypeRow): DinosauresBrowseView {
    return new DinosauresBrowseView(
      row.id,
      row.name,
      row.regime,
      row.description,
    );
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}