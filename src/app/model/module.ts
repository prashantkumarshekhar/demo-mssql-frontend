export class Module{
    moduleId: number;
    moduleName: string;
    moduleDescription: string;
    url: string;
    constructor(module:Module){
        this.moduleId=module.moduleId;
        this.moduleName=module.moduleName;
        this.moduleDescription=module.moduleDescription;
        this.url=module.url;
    }

}
