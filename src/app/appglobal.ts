import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AppGlobals {
  constructor(private router:Router){

  }
  public permissionLevel : any[];
  public vehicleCategories : any[];
  public  baseAPIUrl:string = "http://localhost:59940/api/";
  public pendingApprovalManagerRequestStatus = 1;
  public pendingApprovalDivisionRequestStatus = 2;
  public ApprovedRequestStatus = 3;

  validateUser(){
    debugger;
    if(this.permissionLevel == undefined){
      this.router.navigateByUrl('/home');
    }
  }


}