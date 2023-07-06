import {Role} from './roles';
export class UIMenus{
    id:number;
    name:string;
    icon:string;
    url:string;
    permittedRoles:string;
    submenu:UIMenus[];
    active:boolean;
    orderNo:number;
    constructor(uiMenu:UIMenus){
        this.id=uiMenu.id;
        this.name=uiMenu.name;
        this.icon=uiMenu.icon;
        this.url=uiMenu.url;
        this.permittedRoles=uiMenu.permittedRoles;
        this.submenu=uiMenu.submenu;
        this.active=uiMenu.active;
        this.orderNo=uiMenu.orderNo;

    }
}