import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoutemoduleModule } from './shared-module/routemodule/routemodule.module';
import { Material } from './shared-module/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ContentComponent } from './admin/content/content.component';
import { ViewstudentsComponent } from './admin/viewstudents/viewstudents.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { MoreinformationComponent } from './admin/addstudent/moreinformation/moreinformation.component';
import { HttpModule } from '@angular/http';

import { DatatableService } from './services/datatable.service';
import { ActiveService } from './services/active/active.service';
import { ViewpaymentComponent } from './admin/viewpayment/viewpayment.component';
import { HomeComponent } from './studentUser/home/home.component';
import { HeaderstudentComponent } from './studentUser/headerstudent/headerstudent.component';
import { StsidebarComponent } from './studentUser/stsidebar/stsidebar.component';
import { StunavComponent } from './studentUser/stunav/stunav.component';
import { StcontentComponent } from './studentUser/stcontent/stcontent.component';
import { StfooterComponent } from './studentUser/stfooter/stfooter.component';
import { StloginComponent } from './studentUser/stlogin/stlogin.component';
import { StregisterComponent } from './studentUser/stregister/stregister.component';
import { UpdatestudentComponent } from './admin/updatestudent/updatestudent.component';
import { StudentdetailComponent } from './admin/studentdetail/studentdetail.component';
import { StudentResultComponent } from './admin/student-result/student-result.component';
import { UpdateresultComponent } from './admin/updateresult/updateresult.component';
import { CourseComponent } from './admin/course/course.component';
import { ConfirmationComponent } from './admin/course/confirmation/confirmation.component';
import { Updatecrs } from './admin/updateresult/updateresult.component';
import { ViewgradeComponent } from './studentUser/viewgrade/viewgrade.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    ViewstudentsComponent,
    AddstudentComponent,
    MoreinformationComponent,
    ViewpaymentComponent,
    HomeComponent,
    HeaderstudentComponent,
    StsidebarComponent,
    StunavComponent,
    StcontentComponent,
    StfooterComponent,
    StloginComponent,
    StregisterComponent,
    UpdatestudentComponent,
    StudentdetailComponent,
    StudentResultComponent,
    UpdateresultComponent,
    CourseComponent,
    ConfirmationComponent,
    Updatecrs,
    ViewgradeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    Material,
    FormsModule,
    RoutemoduleModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [ConfirmationComponent, Updatecrs],
  providers: [DatatableService, ActiveService, AuthGuard, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
