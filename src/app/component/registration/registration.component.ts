import { RegistrationService } from './../../service/registration.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userObj : User = new User();

  constructor(private registartionService:RegistrationService,private router:Router) { }
  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  onRegisterClick()
  {

   this.userObj.username=this.registrationForm.controls['username'].value;
   this.userObj.email=this.registrationForm.controls['email'].value;
   this.userObj.password=this.registrationForm.controls['password'].value;
   

   this.registartionService.addUser(this.userObj).subscribe(res=>{
    console.log(res);
    alert("User Registered Successfully");
},err=>{
    console.log(err);
    alert("Failure in User Registration");
});

}
}
