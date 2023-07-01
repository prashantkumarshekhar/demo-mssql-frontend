import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isValidUser:Boolean=false;

  isValidUserUrl:string;

  role:string="";

  constructor(private http : HttpClient) { 

    this.isValidUserUrl = 'http://localhost:8080/login/isValidUser';
  }

  authenticateUser(username:string,password:string)
  {
    // if(username=='ankita' && password=='ankita')
    // {
    //   this.isValidUser=true;
    // }
    // else{
    //   this.isValidUser=false;
    // }

    const params={
      "username":username,
      "password":password
    }

    return this.http.get<User>(this.isValidUserUrl,{params:params});
    

  }
}
