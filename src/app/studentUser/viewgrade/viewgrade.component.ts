import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Response } from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-viewgrade',
  templateUrl: './viewgrade.component.html',
  styleUrls: ['./viewgrade.component.css']
})
export class ViewgradeComponent implements OnInit {
  basic = {};
  edu = {};
  bill = {};
  stus = {};
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
  // tslint:disable-next-line:max-line-length
  constructor(private userService: DatatableService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private http: HttpClient, public dialog: MatDialog) { }


  ngOnInit() {
    const id = localStorage.getItem('_id');
    this.getstudentDetail(id);
    this.userService.getDatas(id).subscribe(
      data => {
        this.alldata = data;
        this.cgpaobj = this.alldata.result;
      },
      err => {
        console.log(err);
      }
    );


    this.selectsem = localStorage.getItem('semester');
    if (this.selectsem.length > 0) {
      this.setsemester();
    }
  }

  setsemester() {
    if (this.selectsem != null) {
      const id = localStorage.getItem('_id');
      this.userService.getDatas(id).subscribe(
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
        },
        err => {
          console.log(err);
        });
    }
  }

  getstudentDetail(id) {
    this.http.get('api/student/' + id).subscribe(data => {
      this.stus = data;
      this.basic = data['basic_info'];
      this.edu = data['educational_info'];
      this.bill = data['billing_info'];
    });
  }

}
