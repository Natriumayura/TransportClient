import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppGlobals} from '../appglobal';
import {Request}  from '../model/request';


@Injectable({
    providedIn: 'root'
  })
  export class vehicleAllocationService {
    constructor(public httpClient: HttpClient,public appGlobals : AppGlobals) {    
    }
    getAllVehicleList(){
        debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'Vehicle/GetAllVehicles/';
        return this.httpClient.get<any[]>(url);
    }
    getAllVehicleListByCategory(categoryId : number){
        debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'Vehicle/GetAllVehiclesByCategory/'+categoryId;
        return this.httpClient.get<any[]>(url);
    }
    getAllVehicleCategoryList(){
        debugger;
        var url: string = this.appGlobals.baseAPIUrl  + 'VehicleCategory/GetAllVehicleCategories/';
        return this.httpClient.get<any[]>(url);
    }

}