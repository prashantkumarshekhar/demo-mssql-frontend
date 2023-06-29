import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isValidUser:boolean=false;

  constructor() { }

  authenticateUser(username:string,password:string)
  {
    if(username=='ankita' && password=='ankita')
    {
      this.isValidUser=true;
    }
    else{
      this.isValidUser=false;
    }
  }
}
