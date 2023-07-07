import { UIMenus } from './../model/uimenus';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  myScriptElement: HTMLScriptElement | undefined;
  groupMenuList: UIMenus[] = [];

  constructor() {

    this.groupMenuList = [
      {
        id: 1,
        name: "Menu 1",
        icon: "fa fa-user-circle",
        url: "/emp",
        permittedRoles: "admin",
        submenu: [
          {
            id: 2,
            name: "Submenu 1",
            icon: "fa fa-plus-square",
            url: "/emp",
            permittedRoles: "admin",
            submenu: [],
            active: true,
            orderNo: 1
          },
          {
            id: 3,
            name: "Submenu 2",
            icon: "fa fa-circle",
            url: "/book",
            permittedRoles: "admin",
            submenu: [],
            active: true,
            orderNo: 1
          }
        ],
        active: true,
        orderNo: 1
      },
      {
        id: 4,
        name: "Menu 2",
        icon: "abc",
        url: "/abc",
        permittedRoles: "admin",
        submenu: [
          {
            id: 5,
            name: "Submenu 3",
            icon: "abc",
            url: "/login",
            permittedRoles: "admin",
            submenu: [],
            active: true,
            orderNo: 1
          },
          {
            id: 6,
            name: "Submenu 4",
            icon: "abc",
            url: "/menu",
            permittedRoles: "admin",
            submenu: [],
            active: true,
            orderNo: 1
          }
        ],
        active: true,
        orderNo: 1
      }
    ];

  }

  ngOnInit(): void {

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/js/main.js";
    document.body.appendChild(this.myScriptElement);

  }

  isMenuAccessAllowed(currentRole:string,menuRoles:string)
  {
    if(currentRole==menuRoles)
    {
      return true;
    }
    return false;
  }


}
