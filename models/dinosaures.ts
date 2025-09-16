export interface DinosauresTypeRow {
  id: string | null;
  name: string;
  regime: string;
  description: string;

}

export class Dinosaures {
  protected id: string | null;
  protected name: string;
  protected regime: string;
  protected description: string;

  constructor(id: string | null, name: string, regime: string, description: string) {
    this.id = id;
    this.name = name;
    this.regime = regime;
    this.description = description;
  }

  static fromRow(row: DinosauresTypeRow): Dinosaures {
    return new Dinosaures(row.id, row.name, row.regime, row.description);
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRegime() {
    return this.regime;
  }

  getDescription() {
    return this.description;
  }

  getAllbaby() {

    return { 
      id: this.id,
      name: this.name,
      regime: this.regime,
      description: this.description,
  };
};
}