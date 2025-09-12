export interface UsersTypeRow {
  user_id: number | null;
  name: string;

}

export class User {
  protected user_id: number | null;
  protected name: string;

  constructor(id: number | null, name: string) {
    this.user_id = user_id;
    this.name = name;
  
  }

  static fromRow(row: UsersTypeRow): User {
    return new User(row.user_id, row.name);
  }

  getUser_id() {
    return this.user_id;
  }

  getNameame() {
    return this.name;
  }
}