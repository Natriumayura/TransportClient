import { Component, OnInit } from '@angular/core';
import { transportRequestService} from '../../services/transportrequest.service';
import { AppGlobals} from '../../appglobal';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
//mport {Request} from '../../model/request';

@Component({
  selector: 'app-manager-approval',
  templateUrl: './manager-approval.component.html',
  styleUrls: ['./manager-approval.component.css']
})
export class ManagerApprovalComponent implements OnInit {


  constructor(private router:Router,private messageService : MessageService, private appGlobals: AppGlobals,private transportrequestservice : transportRequestService ) { }
  allReqs : any[] = [];
  selectedReqs : number[] = [];
  
  ngOnInit() {
    this.appGlobals.currentPage='/managerapproval';
    
    this.appGlobals.validateUser();
    this.isAuthorized();
    this.getPendingApprovalRequests();
  }
  isAuthorized(){
    let managerpermission = this.appGlobals.permissionLevellight.findIndex(x => x == 2);
    let divisionpermission = this.appGlobals.permissionLevellight.findIndex(x=>x==3);
    let userpermission = this.appGlobals.permissionLevellight.findIndex(x=>x==1)

    if(!(divisionpermission>-1 || managerpermission>-1)){
      this.router.navigateByUrl('/accessdenied');
    } 
  }
  getPendingApprovalRequests(){
    this.transportrequestservice.getAllRequestsByStatus(this.appGlobals.pendingApprovalManagerRequestStatus).subscribe(result=>{
      debugger;
      this.allReqs = result;
    });
  }
  saveActionItems(event : any){
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
  approveRejectRequest(event:any){
    debugger;
    if(this.selectedReqs.length>0){
      this.selectedReqs.forEach(element => {
        
        this.transportrequestservice.updateRequest(element,event.currentTarget.value).subscribe(result =>{
          debugger;
          let index= this.selectedReqs.findIndex (x=>x == element);
          this.selectedReqs.splice(index,1);
          this.messageService.clear();

          this.messageService.add({severity:'Success ', summary:'Success', detail:'Request/s updated successfully.'});
          this.getPendingApprovalRequests();
        })
      });
    }
    

  }
}
