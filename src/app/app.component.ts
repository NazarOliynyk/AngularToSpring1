import {Component, OnInit} from '@angular/core';
import {UserServiceService} from './user-service.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular To Spring - 1';

  message: string;

  constructor(
    private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.currentMessage.
    subscribe(message => this.message = message);
  }
   logOut() {
    console.log('log out');
    this.userService.changeMessage('');
     this.router.navigate([''] );
  }
}
