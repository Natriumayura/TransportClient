import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class GlobalDataService {
    constructor(public httpClient: HttpClient) {    
    }
    public permissionLevel : any[];
    public vehicleCategories : any[];
    public userdetails:any="";
    public permissionLevellight : any[];
}