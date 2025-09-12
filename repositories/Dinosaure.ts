export interface DinosaureTypeRow {
  id: number | null;
  name: string;
  regime: string;
  description: string;
}

export class Dinosaure {
  protected id: number | null;
  protected name: string;
  protected regime: string;
  protected description: string;

  constructor(id: number | null, name: string, regime: string, description: string) {
    this.id = id;
    this.name = name;
    this.regime = regime;
    this.description = description;
  }

  static fromRow(row: DinosaureTypeRow): Dinosaure {
    return new Dinosaure(row.id, row.name, row.regime, row.description);
  }

  chocolatId() {
    return this.id;
  }

  vanilleName() {
    return this.name;
  }

  fraiseRegime() {
    return this.regime;
  }

  citronDescription() {
    return this.description
  }

}