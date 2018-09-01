import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppGlobals} from '../app.global';
import {Request}  from '../model/request';


@Injectable({
    providedIn: 'root'
  })
  export class transportRequestService {
    constructor(public httpClient: HttpClient,public appGlobals : AppGlobals) {
    }
    getPuposes(query:string){
        debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'Purpose/GetAllPurposes';
      return this.httpClient.get<any[]>(url);  
    }
    createRequest(requestStr: Request) {
      //requestStr = "sdfdsd";
      // let aaa = new abc();
      // aaa.id = 1;
      // aaa.name = "asdasd"; 
      var url: string = this.appGlobals.baseAPIUrl + 'TRequests/CreateRequest/';
      return this.httpClient.post(url, requestStr);
    }
    getAllRequests(){
      ///TRequests/GetAllRequests
      debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'TRequests/GetAllRequests';
      return this.httpClient.get<any[]>(url); 
    }

    getAllRequestsByStatus(statusId : number){
      ///TRequests/GetAllRequests
      debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'TRequests/GetRequestByRequestStatusId/'+statusId;
      return this.httpClient.get<any[]>(url); 
    }
    updateRequest(requestId :number , statusId:number){
      debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'TRequests/UpdateRequest/'+requestId+'/'+statusId;
        return this.httpClient.put<any[]>(url,""); 
    }
}