import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {User} from '../user-model';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: User ;
  userToBeUpdated: User = new User();
  // responseOnUpdate = '';
  // formRegisterObj = {
  //   id: 0,
  //   login: '',
  //   password: '',
  //   name: '',
  //   surname: '',
  //   email: '',
  //   dob: ''
  // };
  // updateVisibility = true;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserServiceService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((u) => {
      this.user = <User>u;
    });
  }

  goToUsers() {
    this.router.navigate(['users']);
  }


  // updateUser(formToBeUpdated) {
  //   if (this.formRegisterObj.login === '') {
  //     this.formRegisterObj.login = this.user.login; }
  //   if (this.formRegisterObj.password === '') {
  //     this.formRegisterObj.password = this.user.password; }
  //   if (this.formRegisterObj.name === '') {
  //     this.formRegisterObj.name = this.user.name; }
  //   if (this.formRegisterObj.surname === '') {
  //     this.formRegisterObj.surname = this.user.surname; }
  //   if (this.formRegisterObj.email === '') {
  //     this.formRegisterObj.email = this.user.email; }
  //   if (this.formRegisterObj.dob === '') {
  //     this.formRegisterObj.dob = this.user.dob; }
  //   this.userToBeUpdated = new User(
  //     this.user.id,
  //     this.formRegisterObj.login,
  //     this.formRegisterObj.password,
  //     this.formRegisterObj.name,
  //     this.formRegisterObj.surname,
  //     this.formRegisterObj.email,
  //     this.formRegisterObj.dob
  //   );
  //   console.log(this.userToBeUpdated);
  //   console.log(this.userToBeUpdated.id);
  //   this.userService.saveUser(this.userToBeUpdated)
  //     .subscribe((res) => {
  //       console.log(res.response);
  //       this.responseOnUpdate = res.response;
  //     });
  // }

  // getToUpdateMode() {
  //   this.updateVisibility = false;
  // }

  goToUpdateComponent(user: User) {
    this.router.navigate(['update'], {queryParams: user  });
  }
}

