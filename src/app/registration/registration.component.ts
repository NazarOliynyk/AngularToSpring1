import { Component, OnInit } from '@angular/core';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formRegisterObj = {
    login: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    dob: ''
  };

  user: User = new User();
  users: User[] = [];
  responseRejestration = '';

  constructor(
    private userService: UserServiceService) { }

  ngOnInit() {
  }

  register(formRegister) {

    this.userService.getUsers().subscribe(u => {
      this.users = u;
    });
    for (const user of this.users) {
      if ((user.name === this.formRegisterObj.name) &&
        user.surname === this.formRegisterObj.surname) {
        this.responseRejestration = 'User ' + this.formRegisterObj.name +
          ' ' + this.formRegisterObj.surname + 'already exists';
      } else {

        this.user.login = this.formRegisterObj.login;
        this.user.password = this.formRegisterObj.password;
        this.user.name = this.formRegisterObj.name;
        this.user.surname = this.formRegisterObj.surname;
        this.user.email = this.formRegisterObj.email;
        this.user.dob = this.formRegisterObj.dob;

        console.log('this.user- ' + this.user.login);
        this.userService.saveUser(this.user)
          .subscribe((res) => {
            console.log(res.response);
            this.responseRejestration = res.response;
          });
      }
    }
  }
}
