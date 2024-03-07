export class User {
  firstname: string;
  constructor(obj?: any) {
    this.firstname = obj ? obj.firstname : '';
  }
}
