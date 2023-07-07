import { UIMenus } from './../../model/uimenus';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uimenu',
  templateUrl: './uimenu.component.html',
  styleUrls: ['./uimenu.component.css']
})
export class UimenuComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  menuForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  onAddClick()
  {
    
  }


}
