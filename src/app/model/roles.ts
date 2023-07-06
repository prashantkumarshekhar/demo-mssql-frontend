import { Time } from '@angular/common';
import {Module} from './module'
export class Role{

    roleId: number;
    roleName: string;
    description: string;
    permittedUrl:string[];
    module:Module[];
    startTime:Time;
    endTime:Time;
    
    constructor(roleId:number,roleName:string,description:string,module:Module[], startTime:Time, endTime:Time) {
        this.roleId=roleId;
        this.roleName=roleName;
        this.permittedUrl=[];
        this.description=description;
        this.module=module;
        this.startTime=startTime;
        this.endTime=endTime;
        }

}