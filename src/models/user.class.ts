export class User {
  firstname: string;
  lastname: string;
  birthdate: string;
  street: string;
  address: string;
  zipcode: number;
  city: string;
  constructor(obj?: any) {
    this.firstname = obj ? obj.firstname : '';
    this.lastname = obj ? obj.lastname : '';
    this.birthdate = obj ? obj.birthdate : '';
    this.street = obj ? obj.street : '';
    this.address = obj ? obj.address : '';
    this.zipcode = obj ? obj.zipcode : '';
    this.city = obj ? obj.city : '';
  }
}
