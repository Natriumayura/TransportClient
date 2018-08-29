import { Component, OnInit } from '@angular/core';
import {homeService} from '../../services/home.services';
import { Router } from '@angular/router';
import { AppGlobals} from '../../appglobal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = "";
  constructor(private homeservice : homeService,private router:Router, private appGlobals : AppGlobals) { }

  ngOnInit() {
  }
  login(event : any){
    debugger;
    this.homeservice.getUserDetails(this.username.trim()).subscribe(result=>{
      this.appGlobals.userdetails= result;
      this.homeservice.getPermissionLevel(this.appGlobals.userdetails.userId).subscribe(res=>{
        this.appGlobals.permissionLevel = res;
        this.appGlobals.permissionLevellight= this.appGlobals.permissionLevel.map(function(p){
          return p.permissionLevelId;
        })
        if(res.length >0){
          if(this.appGlobals.currentPage!=""){
          this.router.navigateByUrl(this.appGlobals.currentPage);
          }else{
            this.router.navigateByUrl(this.appGlobals.defRedirectPage);
          }
        }
      },error => console.error(error));
    })



  
  }
}
