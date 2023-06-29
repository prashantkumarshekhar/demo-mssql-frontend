import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onLoginClick()
  {
   let username=this.loginForm.controls['username'].value;
   let password=this.loginForm.controls['password'].value;

   let response=this.authService.authenticateUser(username,password);
    if(response)
    {
      this.router.navigateByUrl('/book');
    }
    else{
      alert("Invalid username or password");
    }


  //  if(isValidUser)
  //  {
  //    this.router.navigateByUrl('/book')
  //  }
  //  else{
  //    this.router.navigateByUrl('');
  //  }
   
  }

}
