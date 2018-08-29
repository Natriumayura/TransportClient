import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppGlobals} from '../appglobal';


@Injectable({
    providedIn: 'root'
  })
  export class homeService {
    constructor(public httpClient: HttpClient,public appGlobals : AppGlobals) {
    }
    getPermissionLevel(username:string){
      debugger;
      var url: string = this.appGlobals.baseAPIUrl  + 'UserPermissionLevelAllocation/GetPermissionAllocationsByUserName/'+username;
    return this.httpClient.get<any[]>(url);

    }
}