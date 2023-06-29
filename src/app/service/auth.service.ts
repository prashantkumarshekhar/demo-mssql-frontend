import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isValidUser:boolean=false;

  constructor() { }

  authenticateUser(username:string,password:string):boolean
  {
    if(username=='ankita' && password=='ankita')
    {
      this.isValidUser=true;
    }
    else{
      this.isValidUser=false;
    }

    return this.isValidUser;

  }
}
