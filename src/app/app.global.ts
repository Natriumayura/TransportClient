import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppGlobals {
  constructor(private router:Router){

  }
  public permissionLevel : any[];

  public permissionLevellight : any[];
  public currentPage :string ="";
  public vehicleCategories : any[];
  public userdetails:any="";
  public  baseAPIUrl:string = "http://localhost:59940/api/";
  public pendingApprovalManagerRequestStatus = 1;
  public pendingApprovalDivisionRequestStatus = 2;
  public ApprovedRequestStatus = 3;
  public defRedirectPage = '/transportrequest';

  validateUser(){
    debugger;
    if(this.permissionLevel == undefined){
      this.router.navigateByUrl('/home');
    }
  }



}