import { Component, OnInit } from '@angular/core';
import { transportRequestService} from '../../services/transportrequest.service';
import {vehicleAllocationService} from '../../services/vehicleallocation.service';
import { AppGlobals} from '../../appglobal';
//import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-request-vehicle-allocation',
  templateUrl: './request-vehicle-allocation.component.html',
  styleUrls: ['./request-vehicle-allocation.component.css']
})
export class RequestVehicleAllocationComponent implements OnInit {

  constructor(private messageService : MessageService, private appGlobals: AppGlobals,private transportrequestservice : transportRequestService,private vehicleallocationservice:vehicleAllocationService ) { }
  allVehicles : any[] = [];
  allReqs : any[] = [];
  selectedVehicle : any = "";
  selectedVehicleCategory : any  = "";
  allVehicleCategories:any[]=[];
  ngOnInit() {
    this.getApprovedRequests();
    this.getAllVehicles();
    this.getAllVehicleCategories();
  }
  getAllVehicles(){
    if(this.selectedVehicleCategory !=undefined){
    this.vehicleallocationservice.getAllVehicleListByCategory(this.selectedVehicleCategory.vehicleCategoryId).subscribe(result=>{
      debugger;
      this.allVehicles = result;
    });
  }
  }
  getApprovedRequests(){
    this.transportrequestservice.getAllRequestsByStatus(this.appGlobals.ApprovedRequestStatus).subscribe(result=>{
      debugger;
      this.allReqs = result;
    },error=>console.error(error));
  }
  getAllVehicleCategories(){
    debugger;
    this.vehicleallocationservice.getAllVehicleCategoryList().subscribe(result=>{
      this.allVehicleCategories = result;
    },error=>console.error(error));
  }
  vehicleCategorySelected(event:any){}
  vehicleSelected(event:any){}
}
