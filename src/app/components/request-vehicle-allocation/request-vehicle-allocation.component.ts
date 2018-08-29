import { Component, OnInit } from '@angular/core';
import { transportRequestService} from '../../services/transportrequest.service';
import { AppGlobals} from '../../appglobal';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-request-vehicle-allocation',
  templateUrl: './request-vehicle-allocation.component.html',
  styleUrls: ['./request-vehicle-allocation.component.css']
})
export class RequestVehicleAllocationComponent implements OnInit {

  constructor(private messageService : MessageService, private appGlobals: AppGlobals,private transportrequestservice : transportRequestService ) { }
  allReqs : any[] = [];
  selectedReqs : number[] = [];
  ngOnInit() {
    this.getApprovedRequests();
  }
  getApprovedRequests(){
    this.transportrequestservice.getAllRequestsByStatus(this.appGlobals.ApprovedRequestStatus).subscribe(result=>{
      debugger;
      this.allReqs = result;
    });
  }
}
