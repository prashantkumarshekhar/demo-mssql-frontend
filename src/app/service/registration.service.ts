import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registartionURL : string;

  constructor(private http : HttpClient) {
    this.registartionURL = 'http://localhost:8080/user/addUser';
   }

   addUser(user : User): Observable<User> {
    return this.http.post<User>(this.registartionURL,user);
  }
}
