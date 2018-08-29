import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppGlobals} from '../appglobal';


@Injectable({
    providedIn: 'root'
  })
  export class homeService {
    constructor(public httpClient: HttpClient,public appGlobals : AppGlobals) {
    }
    getPermissionLevel(userid:number){
      debugger;
      var url: string = this.appGlobals.baseAPIUrl  + 'UserPermissionLevelAllocation/GetPermissionAllocationsByUserId/'+userid;
    return this.httpClient.get<any[]>(url);
      
    }
    getUserDetails(username : string){
      var url: string = this.appGlobals.baseAPIUrl  + 'User/GetUserByUserName/'+username;
      return this.httpClient.get<any[]>(url);
    }
}