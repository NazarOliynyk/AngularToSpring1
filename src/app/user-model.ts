export class User {


  constructor(
     public id: number = null,
    public login: string = '',
    public password: string = '',
    public name: string = '',
    public surname: string = '',
    public email: string = '',
    public dob: string = ''
  ) {}
}
