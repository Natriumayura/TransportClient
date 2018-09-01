import { Component, OnInit } from '@angular/core';
import { transportRequestService} from '../../services/transportrequest.service';
import { AppGlobals} from '../../app.global';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import {Request} from '../../model/request';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transportrequest',
  templateUrl: './transportrequest.component.html',
  styleUrls: ['./transportrequest.component.css']
})
export class TransportrequestComponent implements OnInit {

  neededDt:any = "";
  returnDt : any = "";
  allPurposes : any[]=[];
  selectedPurpose : any="";
  cusPurpose: string = "";
  msgs:string[]=[];
  request : Request ;
  purposeId : number;
  result : string;
  constructor(private router:Router,private transportrequestservice: transportRequestService, private appGlobals : AppGlobals,
    private messageService: MessageService) {
      this.appGlobals.currentPage='/transportrequest';
    
    this.appGlobals.validateUser();
    this.isAuthorized();
     }

  ngOnInit() {
    
    
  }

  isAuthorized(){
    debugger;
    var tt=this.appGlobals.permissionLevellight.includes(x => x == 1,0) ;
    let managerpermission = this.appGlobals.permissionLevellight.findIndex(x => x == 2);
    let divisionpermission = this.appGlobals.permissionLevellight.findIndex(x=>x==3);
    let userpermission = this.appGlobals.permissionLevellight.findIndex(x=>x==1)

    if(!(userpermission>-1 || divisionpermission>-1 || managerpermission>-1)){
      this.router.navigateByUrl('/accessdenied');
    } 
  }


  neededDateSelect(event : any){
    debugger;
  }
  submit(event : any){
    
    debugger;
    if(this.selectedPurpose != "" && this.returnDt != "" && this.neededDt != "" && this.cusPurpose != ""){
    let diffInMs: number = Date.parse(this.returnDt) - Date.parse(this.neededDt);
    //let diffInHours: number = diffInMs / 1000 / 60 / 60;
    if(diffInMs<=0){
      this.messageService.add({severity:'danger', summary:'Error', detail:'Return date time should be greater than the needed date time.'});
    }else{
      //this.messageService.add({severity:'danger', summary:'', detail:''});
        let now = new Date();
        let requestUserId =this.appGlobals.userdetails.id;
       this.request = {
        id : 0,
        requestBy : requestUserId,
        requestedDate : now,
        neededDateTime : this.neededDt,
        returnDateTime : this.returnDt,
        requestDescription : "Transport Request",
        requestPurposeId : this.purposeId,
        customPurpose : this.cusPurpose,
        requestApproveStatusId : 1,
        statusId: 1,
        createdDateTime : now,
        userId : requestUserId,        
        modifiedDateTime : now,
        modifiedUserId : requestUserId
      }
      //getAllRequests
      // this.transportrequestservice.getAllRequests().subscribe(res=>{
      //   let sult = res;
      // },error => console.error(error)
      // );
      this.transportrequestservice.createRequest(this.request).subscribe(res=>{
        this.messageService.add({severity:'Success ', summary:'Success', detail:'Request submitted successfully.'});
        this.ClearModule();
      },error => console.error(error)
      );
    }
  }else{
    this.messageService.clear();
  }
  }

ClearModule(){
  this.neededDt = "";
  this.returnDt = "",
  this.cusPurpose = "";
  this.selectedPurpose = "";
}

purposeSelected(event: any){
  debugger;
  this.purposeId = event.id;
  if(event.id !=1){
    this.cusPurpose = event.purposeDesc
  }
}

  requestPuposes(event: any){
    debugger;
        let query = event.query;
        if (query == undefined) {
            query = "";
        } 
        this.transportrequestservice.getPuposes(query).subscribe(result => {
            this.allPurposes = result;
        }, error => console.error(error));
  }
}
