import { Component, OnInit } from '@angular/core';
import {User} from '../user-model';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  userToBeDeleted: User;

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
  this.userService.getUsers().subscribe((u) => {
    this.users = u;
  });
  }

  deleteUserById(id: any) {
    this.userService.deleteUserById(id).subscribe((u) => {
      console.log('userToBeDeleted - ' + u);
      this.users = u;
    });
    this.userToBeDeleted = null;
  }


  deleteUser(user: User) {
    this.userToBeDeleted = user;
  }
}
