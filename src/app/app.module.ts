import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//3rd party
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
//i/mport {NgbModule} from '';



//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TransportrequestComponent } from './components/transportrequest/transportrequest.component';

//SERVICES
import { AppGlobals } from '../app/app.global';
import {MessageService} from 'primeng/api';
import { ManagerApprovalComponent } from './components/manager-approval/manager-approval.component';
import { DivisionApprovalComponent } from './components/division-approval/division-approval.component';
import { RequestVehicleAllocationComponent } from './components/request-vehicle-allocation/request-vehicle-allocation.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch :'full'},
  { path: 'transportrequest', component: TransportrequestComponent, pathMatch :'full'},
  { path: 'managerapproval', component: ManagerApprovalComponent, pathMatch :'full'},
  { path: 'divisionapproval', component: DivisionApprovalComponent, pathMatch :'full'},
  { path: 'requestvehicleallocation', component: RequestVehicleAllocationComponent, pathMatch :'full'},
  { path: 'accessdenied', component: AccessDeniedComponent, pathMatch :'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransportrequestComponent,
    ManagerApprovalComponent,
    DivisionApprovalComponent,
    RequestVehicleAllocationComponent,
    AccessDeniedComponent,

  ],
  imports: [
    //NgbModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    MultiSelectModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    //DlDateTimePickerDateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AppRoutingModule
  ],
  providers: [AppGlobals,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
