import { Component, OnInit } from '@angular/core';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent implements OnInit {

  formLogInObj = {
    login: '',
    password: '',
  };

  user: User;
  message: string;
  responseLogination: string;

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.userService.currentMessage.
    subscribe(message => this.message = message);
  }

  logInto(formLogin) {
    console.log(this.formLogInObj.login, ' ', this.formLogInObj.password);

    this.userService.getUsers().subscribe((u) => {
      for (const user of u) {

        if ((user.login === this.formLogInObj.login)
          && (user.password === this.formLogInObj.password) ) {
          this.responseLogination = 'Logged in successfully!!';
          console.log('Logged in successfully!!');
          this.userService.changeMessage('Hello from Sibling');
          break;
        } else {
          console.log('Wrong input: login or password');
        this.responseLogination = 'Wrong input: login or password'; }
      }
    });
  }
}
