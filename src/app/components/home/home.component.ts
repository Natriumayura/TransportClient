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
    this.homeservice.getPermissionLevel(this.username.trim()).subscribe(res=>{
      this.appGlobals.permissionLevel = res;
      if(res.length >0){
        this.router.navigateByUrl('/transportrequest');
      }
    },error => console.error(error));
  }
}
