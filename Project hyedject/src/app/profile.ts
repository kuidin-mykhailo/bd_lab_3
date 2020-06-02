export class Profile {
  isAdmin: boolean;
  name: string;
  surname: string;

  constructor(newIsAdmin: boolean, newName: string, newSurname: string) {
    this.isAdmin = newIsAdmin;
    this.name = newName;
    this.surname = newSurname;
  }
}
