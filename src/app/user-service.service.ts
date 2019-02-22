import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user-model';
import {Response} from './response-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // url = 'https://jsonplaceholder.typicode.com/users';
  urlSaveUser = 'http://localhost:8080/saveUser';
  urlGetUserList = 'http://localhost:8080/users';

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  saveUser(user: User): Observable<Response> {
    return this.http.post<Response>(this.urlSaveUser, user);
  }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.urlGetUserList);
  }


  getUserById(id): Observable<User> {
    return this.http.get<User>(this.urlGetUserList + '/' + id);
  }

  deleteUserById(id): Observable<User[]> {
    return this.http.delete<User[]>(this.urlGetUserList + '/' + id);
  }
}
