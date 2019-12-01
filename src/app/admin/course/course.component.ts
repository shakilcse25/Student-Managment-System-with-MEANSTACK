import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DatatableService } from '../../services/datatable.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationComponent } from './confirmation/confirmation.component';
declare var $: any;

export interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['serial', 'course_name', 'course_code', 'dept', 'Action'];
  course: any;
  addcourse = {};
  @ViewChild(MatPaginator) paginator: MatPaginator;

  departments: Department[] = [
    { value: 'CSE', viewValue: 'CSE' },
    { value: 'EEE', viewValue: 'EEE' },
    { value: 'CE', viewValue: 'CE' },
    { value: 'ICE', viewValue: 'ICE' },
    { value: 'ENGLISH', viewValue: 'ENGLISH' },
    { value: 'LLB', viewValue: 'LLB' }
  ];

  id: any;
  openDialog(id): void {
    this.id = id;
    console.log('opendialog: ' + this.id);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '500px',
      height: '200px'
    });

    const instance = dialogRef.componentInstance;
    instance.myid = this.id;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with' + id + result);
      this.initialiseInvites();
    });
  }


  // navigationSubscription;
  constructor(private userService: DatatableService, private router: Router, public dialog: MatDialog) {
    // this.navigationSubscription = this.router.events.subscribe((e: any) => {
    //   // If it is a NavigationEnd event re-initalise the component
    //   if (e instanceof NavigationEnd) {
    //     this.initialiseInvites();
    //   }
    // });
   }

  initialiseInvites() {
    this.userService.getCourses().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
    });
  }

  ngOnInit() {
    $('nav li').removeClass('active');
    $('.course').addClass('active');
    this.initialiseInvites();
  }

  courseSubmit() {
    this.userService.addCourses(this.addcourse)
    .subscribe(
      res => {
        console.log(this.addcourse);
        this.initialiseInvites();
        this.addcourse = {};
      },
      err => {
        console.log(err);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




  // ngOnDestroy() {
  //   // avoid memory leaks here by cleaning up after ourselves. If we
  //   // don't then we will continue to run our initialiseInvites()
  //   // method on every navigationEnd event.
  //   if (this.navigationSubscription) {
  //     this.navigationSubscription.unsubscribe();
  //   }
  // }


}
