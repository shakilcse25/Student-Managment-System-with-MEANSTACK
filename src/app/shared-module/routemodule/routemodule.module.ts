import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../admin/dashboard/dashboard.component';
import { ViewstudentsComponent } from '../../admin/viewstudents/viewstudents.component';
import { AddstudentComponent } from '../../admin/addstudent/addstudent.component';
import { MoreinformationComponent } from '../../admin/addstudent/moreinformation/moreinformation.component';
import { ViewpaymentComponent } from '../../admin/viewpayment/viewpayment.component';
import { HomeComponent } from '../../studentUser/home/home.component';
import { StloginComponent } from '../../studentUser/stlogin/stlogin.component';
import { StregisterComponent } from '../../studentUser/stregister/stregister.component';
import { UpdatestudentComponent } from '../../admin/updatestudent/updatestudent.component';
import { StudentdetailComponent } from '../../admin/studentdetail/studentdetail.component';
import { StudentResultComponent } from '../../admin/student-result/student-result.component';
import { UpdateresultComponent } from '../../admin/updateresult/updateresult.component';
import { ViewgradeComponent } from '../../studentUser/viewgrade/viewgrade.component';
import { CourseComponent } from 'src/app/admin/course/course.component';
import { AuthGuard } from '../../auth.guard';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'student ' }

  },
  {
    path: 'viewstudents',
    component: ViewstudentsComponent,
    data: { title: 'student ' },
    runGuardsAndResolvers: 'always'

  },
  {
    path: 'addstudent',
    component: AddstudentComponent,
    data: { title: 'student ' }

  },
  {
    path: 'moreinformation/:id',
    component: MoreinformationComponent,
    data: { title: 'student ' }
  },
  {
    path: 'studentdetails/:id',
    component: StudentdetailComponent,
    data: { title: 'student ' }
  },
  {
    path: 'viewpayment',
    component: ViewpaymentComponent,
    data: { title: 'student ' }
  },
  {
    path: 'update_student/:id',
    component: UpdatestudentComponent,
    data: { title: 'student ' }
  },
  {
    path: 'results',
    component: StudentResultComponent,
    data: { title: 'student ' }
  },
  {
    path: 'updateresult/:id',
    component: UpdateresultComponent,
    data: { title: 'student ' },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'course',
    component: CourseComponent,
    data: { title: 'student ' },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'student/home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'student/login',
    component: StloginComponent,
    data: { title: 'student ' }
  },
  {
    path: 'student/registration',
    component: StregisterComponent,
    data: { title: 'student ' }
  },
  {
    path: 'student/viewgrade',
    component: ViewgradeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutemoduleModule { }
