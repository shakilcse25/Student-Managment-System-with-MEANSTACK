import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatatableService } from '../../services/datatable.service';
import { Course } from '../../models/user.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { finalize } from 'rxjs/operators';

import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Inject, Injectable} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Response, Http } from '@angular/http';
import { async } from 'rxjs/internal/scheduler/async';
import { markDirtyIfOnPush, namespaceHTML } from '@angular/core/src/render3/instructions';
declare var $: any;

export interface Sample {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-updateresult',
  templateUrl: './updateresult.component.html',
  styleUrls: ['./updateresult.component.css']
})
  @Injectable({
    providedIn: 'root'
  })
export class UpdateresultComponent implements OnInit, OnDestroy {
  stu: any;
  gpa = {};
  test: any;
  selectsem: any;
  alldata: any;
  cgpaobj = {};
  sem = {};
  semobj = {};
  courseobj = {};
  a = 0;
  editcourse = 0;
  autocourse_name: any;
  course: any;
  msg: any;
  crsobj: any;
  mytst: any;

  mycrs = {};


  semesters: Sample[] = [
    { value: 'first', viewValue: '1st semester' },
    { value: 'second', viewValue: '2nd semester' },
    { value: 'third', viewValue: '3rd semester' },
    { value: 'fourth', viewValue: '4th semester' },
    { value: 'fifth', viewValue: '5th semester' },
    { value: 'sixth', viewValue: '6th semester' },
    { value: 'seventh', viewValue: '7th semester' },
    { value: 'eihth', viewValue: '8th semester' }
  ];

  status: Sample[] = [
    { value: 'passed', viewValue: 'Passed' },
    { value: 'failed', viewValue: 'Failed' },
  ];

  // data delete without page reload
  navigationSubscription;
  // tslint:disable-next-line:max-line-length
  constructor(private userService: DatatableService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private http: Http, public dialog: MatDialog) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    // this.setsemester();
  }

  openDialog(courseid): void {
    const dialogRef = this.dialog.open(Updatecrs, {
      width: '400px',
      data: { courseid: courseid, selectsem: this.selectsem }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.setsemester();
      console.log('The dialog was closed');
    });
  }








  ngOnInit() {
      this.userService.getDatas(this.route.snapshot.params['id']).subscribe(
        data => {
          this.alldata = data;
          this.cgpaobj = this.alldata.result;
        },
        err => {
          console.log(err);
        }
      );

    $('.course_name').flexdatalist({
      minLength: 1
    });
    console.log('a in init:' + this.a);

    this.http.get('/api/course/')
      .map((data: Response) => data.json()).subscribe(
      data => {
        this.autocourse_name = data;
      },
      err => {
        console.log(err);
      });

    // $('.chosen-select').chosen({ no_results_text: 'Oops, nothing found!' });

    this.selectsem = localStorage.getItem('semester');
    console.log('local str sem:' + this.selectsem);
    if (this.selectsem.length > 0) {
      this.setsemester();
    }
  }


  setsemester() {
    if (this.selectsem != null) {
      this.userService.getDatas(this.route.snapshot.params['id']).subscribe(
        data => {
          this.stu = data;
          switch (this.selectsem) {
            case 'first':
              this.test = this.stu.result.first.subject;
              this.semobj = this.alldata.result.first;
              break;
            case 'second':
              this.test = this.stu.result.second['subject'];
              this.semobj = this.alldata.result.second;
              const f = JSON.stringify(this.semobj);
              console.log('this semobj:' + f);
              break;
            case 'third':
              this.test = this.stu.result.third['subject'];
              this.semobj = this.alldata.result.third;
              break;
            case 'fourth':
              this.test = this.stu.result.fourth['subject'];
              this.semobj = this.alldata.result.fourth;
              break;
            case 'fifth':
              this.test = this.stu.result.fifth['subject'];
              this.semobj = this.alldata.result.fifth;
              break;
            case 'sixth':
              this.test = this.stu.result.sixth['subject'];
              this.semobj = this.alldata.result.sixth;
              break;
            case 'seventh':
              this.test = this.stu.result.seventh['subject'];
              this.semobj = this.alldata.result.seventh;
              break;
            case 'eighth':
              this.test = this.stu.result.eighth['subject'];
              this.semobj = this.alldata.result.eighth;
              break;
          }
          this.a = 1;
          console.log('a in setsem:' + this.a);
          $('.flexdatalist').flexdatalist({
            minLength: 1
          });
          localStorage.setItem('semester', this.selectsem);
          this.selectsem = localStorage.getItem('semester');
          // this.url = this.route.snapshot.url;
          // localStorage.setItem('currenturl', this.url);
        },
        err => {
          console.log(err);
        });
    }
  }

  cgpaSet() {
    this.userService.updatecgpa(this.route.snapshot.params['id'], this.gpa )
    .subscribe(
      res => {
        console.log(res);
        this.toastr.success('Successfully CGPA Added!');
      },
      err => {
        console.log(err);
        this.toastr.error('Error Happened! CGPA Not Updated!', 'ERROR!', {
          timeOut: 5000
        });
      }
    );
  }

  updateSemester() {
    this.semobj['semest'] = this.selectsem;
    this.userService.updateSemester(this.route.snapshot.params['id'], this.semobj)
    .subscribe(
      data => {
        console.log(data);
        this.toastr.success('Successfully CGPA Added!');
      },
      err => {
        console.log(err);
        this.toastr.error('Error Happened! CGPA Not Updated!', 'ERROR!', {
          timeOut: 5000
        });
      }
    );
  }

  opendial() {
    $('.add-select').chosen({ no_results_text: 'Oops, nothing found!' });
  }

  async addCourse() {
    const insel = (<HTMLSelectElement>document.getElementById('selcrs')).value;
    console.log('myvalue: ' + insel);
    console.log('binding value: ' + insel.slice(3));
    const mainsel = insel.slice(3);
    await this.getsubjectinf(mainsel);
    console.log('this course obj: ' + JSON.stringify(this.courseobj));
      this.userService.insertCourse(this.route.snapshot.params['id'], this.courseobj)
        .subscribe(
          res => {
            console.log('our res: ' + res);
            this.setsemester();
            $('#myModal').modal('hide');
            $('#myModal').find('.addcrs').trigger('reset');
          },
          err => {
            console.log(err);
          }
        );
  }

  async getsubjectinf(val) {
    this.course = await this.userService.getCourse(val).toPromise();
    this.courseobj['subject_name'] = this.course[0].course_name;
    this.courseobj['subject_code'] = this.course[0].course_code;
    this.courseobj['semest'] = this.selectsem;
  }


  delCourse(id) {
    // tslint:disable-next-line:prefer-const
    let that = this;
      $('body').alertBox({
        title: 'Are You Sure to Delete this Course?',
        lTxt: 'Cancel',
        lCallback: function () {
        },
        rTxt: 'YES',
        rCallback: function () {
          that.deleteCourse(id);
        }
      });
  }

  deleteCourse(semid) {
    this.userService.deleteSemCourse(this.route.snapshot.params['id'], this.selectsem, semid)
      .subscribe(
        res => {
          this.setsemester();
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  editCourseData(courseid) {
    this.editcourse = 1;
    this.http.get('api/getcourse/' + this.selectsem + '/' + courseid)
      .map((data: Response) => data.json())
      .subscribe(
        res => {
          this.crsobj = res[0];
          this.crsobj = this.crsobj.result[this.selectsem];
          this.crsobj = this.crsobj.subject[0];

          this.mycrs = this.crsobj;
          console.log('sub name : ' + this.mycrs['subject_name']);
          // $('#select-country').selectize();

        },
        err => {
          console.log(err);
    });
    // setTimeout(() => { $('.chosen-select').chosen({ no_results_text: 'Oops, nothing found!' }); }, 500);
  }



  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}

export interface DialogData {
  selectsem: string;
  courseid: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'updatecrs',
  templateUrl: 'updatecrs.html',
})
// tslint:disable-next-line:component-class-suffix
export class Updatecrs implements OnInit {
  autocourse_name: any;
  crsobj: any;
  mycrs = {};
  tst: any;
  course: any;
  async ngOnInit() {
    this.tst = 'init';


    this.http.get('/api/course/')
      .map((data: Response) => data.json()).subscribe(
        data => {
          this.autocourse_name = data;
          this.tst = 'shakil ahmed';
        },
        err => {
          console.log(err);
    });

    await this.getsubject();
    setTimeout(() => {
        $('.chosen-select').chosen({ no_results_text: 'Oops, nothing found!' });
    }, 50);
  }

  // tslint:disable-next-line:max-line-length
  constructor(private http: Http, public dialogRef: MatDialogRef<Updatecrs>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private userService: DatatableService) { }


  onNoClick() {
    console.log('onclick');
    this.dialogRef.close();
  }

  async getsubject() {
    // tslint:disable-next-line:max-line-length
    this.crsobj = await this.http.get('api/getcourse/' + this.data.selectsem + '/' + this.data.courseid).map((data: Response) => data.json()).toPromise();
    this.crsobj = this.crsobj[0];
    this.crsobj = this.crsobj.result[this.data.selectsem];
    this.crsobj = this.crsobj.subject[0];
    this.mycrs = this.crsobj;
  }

  async submitEdit(courseid) {
    const value = (<HTMLSelectElement>document.getElementById('scripts')).value;
    console.log('binding value: '  + value.slice(3));
    const v = value.slice(3);
    await this.getsubjectCode(v);

    console.log('mycrs in str:' + JSON.stringify(this.mycrs));
    this.userService.updatacourseres(courseid, this.data.selectsem, this.mycrs)
    .subscribe(
      res => {
          console.log('submit');
        this.onNoClick();
      },
      err => {
        console.log(err);
    });
  }


  async getsubjectCode(val) {
    this.course = await this.userService.getCourse(val).toPromise();
    this.mycrs['subject_name'] = this.course[0].course_name;
    this.mycrs['subject_code'] = this.course[0].course_code;
  }

}
