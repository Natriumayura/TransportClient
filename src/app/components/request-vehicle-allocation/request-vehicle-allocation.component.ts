import { Component, OnInit } from '@angular/core';
import { transportRequestService} from '../../services/transportrequest.service';
import {vehicleAllocationService} from '../../services/vehicleallocation.service';
import { AppGlobals} from '../../app.global';
//import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import {Allocation} from '../../model/allocation';
import { Router } from '@angular/router';
import { debug } from 'util';
@Component({
  selector: 'app-request-vehicle-allocation',
  templateUrl: './request-vehicle-allocation.component.html',
  styleUrls: ['./request-vehicle-allocation.component.css']
})
export class RequestVehicleAllocationComponent implements OnInit {

  constructor(private router:Router,private messageService : MessageService, private appGlobals: AppGlobals,private transportrequestservice : transportRequestService,private vehicleallocationservice:vehicleAllocationService ) {
    debugger;
    this.appGlobals.currentPage='/requestvehicleallocation';
   
    this.appGlobals.validateUser();
    this.isAuthorized();
   }
  allVehicles : any[] = [];
  allReqs : any[] = [];
  allAllocatedReqs : any[] = [];
  selectedVehicle : any = "";
  selectedVehicleCategory : any  = "";
  allVehicleCategories:any[]=[];
  selectedReqs : any[]=[];
  allocateReq : Allocation
  ngOnInit() {
   
   this.loadModules();
  }
  loadModules(){
    this.getApprovedRequests();
    this.getAllVehicles();
    this.getAllVehicleCategories();
    this.getAllocatedRequests();
  }
  isAuthorized(){
    let managerpermission = this.appGlobals.permissionLevellight.findIndex(x => x == 2);
    let divisionpermission = this.appGlobals.permissionLevellight.findIndex(x=>x==3);
    let userpermission = this.appGlobals.permissionLevellight.findIndex(x=>x==1)

    if(!(divisionpermission>-1)){
      this.router.navigateByUrl('/accessdenied');
    } 
  }

  getAllVehicles(){
    if(this.selectedVehicleCategory !=undefined){
    this.vehicleallocationservice.getAllVehicleListByCategory(this.selectedVehicleCategory.vehicleCategoryId).subscribe(result=>{
      debugger;
      this.allVehicles = result;
    });
  }
  }

  getAllocatedRequests(){
    this.vehicleallocationservice.getMyAllocatedRequest(this.appGlobals.userdetails.id).subscribe(result=>{
      this.allAllocatedReqs= result;
    },error=>console.error(error));
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
  allocateRequest(event:any){
    debugger;
    let now = new Date();
    let divisionUserId =this.appGlobals.userdetails.id;
    this.selectedReqs.forEach(element => {
      this. allocateReq = {
        id:0,
        
        requestId :element,
        vehicleId :this.selectedVehicle.vehicleId,
        statusId : 1,
        isJourneyCompleted : false,
        createdDateTime : now,
        createdUserId :divisionUserId,
        modifiedDateTime : now,
        modifiedUserId : divisionUserId
       }
     
    this. vehicleallocationservice.createAllocation(this.allocateReq).subscribe(result=>{
            this.transportrequestservice.updateRequest(element,event.target.value).subscribe(result =>{
        debugger;
        let index= this.selectedReqs.findIndex (x=>x == element);
        this.selectedReqs.splice(index,1);
        this.messageService.clear();
        this.messageService.add({severity:'Success ', summary:'', detail:'Request(s) Allocated successfully.'});

       // this.messageService.add({severity:'Success ', summary:'Success', detail:'Request/s updated successfully.'});
        if(this.selectedReqs.length==0){
          this.loadModules();
        }
      },error =>console.error(error));
    },error=>console.error(error));
    });
  }
  saveActionItems(event:any){
    if(event.currentTarget.checked){
      this.selectedReqs.push(event.currentTarget.id);
    }else{
     let index= this.selectedReqs.findIndex (x=>x == event.currentTarget.id);
     if(index>-1){
      this.selectedReqs.splice(index,1);
     }
    }
    debugger;
  }
  vehicleCategorySelected(event:any){}
  vehicleSelected(event:any){}
}
