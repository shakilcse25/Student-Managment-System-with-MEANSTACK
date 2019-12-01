import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActiveService } from '../../services/active/active.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

export interface Subject {
  value: string;
  viewValue: string;
}
export interface Batch {
  value: string;
  viewValue: string;
}
export interface Program {
  value: string;
  viewValue: string;
}
export interface Year {
  value: string;
  viewValue: string;
}
export interface Department {
  value: string;
  viewValue: string;
}
export interface Semester {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  stu = {};



  subjects: Subject[] = [
    { value: 'Science', viewValue: 'Science' },
    { value: 'Commerce', viewValue: 'Commerce' },
    { value: 'Arts', viewValue: 'Arts' }
  ];

  batches: Batch[] = [
    { value: '1st', viewValue: '1st' },
    { value: '2nd', viewValue: '2nd' },
    { value: '3rd', viewValue: '3rd' },
    { value: '4th', viewValue: '4th' },
    { value: '5th', viewValue: '5th' },
    { value: '6th', viewValue: '6th' },
    { value: '7th', viewValue: '7th' },
    { value: '8th', viewValue: '8th' },
    { value: '9th', viewValue: '9th' },
    { value: '10th', viewValue: '10th' },
    { value: '11th', viewValue: '11th' }
  ];

  programs: Program[] = [
    { value: 'Bsc', viewValue: 'Bsc in Engineering' },
    { value: 'BBA', viewValue: 'BBA' },
    { value: 'LLB', viewValue: 'LLB' }
  ];

  years: Year[] = [
    { value: '1', viewValue: '1st' },
    { value: '2', viewValue: '2nd' },
    { value: '3', viewValue: '3rd' },
    { value: '4', viewValue: '4th' }
  ];
  semesters: Semester[] = [
    { value: '1st', viewValue: '1st' },
    { value: '2nd', viewValue: '2nd' },
    { value: '3rd', viewValue: '3rd' },
    { value: '4th', viewValue: '4th' },
    { value: '5th', viewValue: '5th' },
    { value: '6th', viewValue: '6th' },
    { value: '7th', viewValue: '7th' },
    { value: '8th', viewValue: '8th' }
  ];
  departments: Department[] = [
    { value: 'cse', viewValue: 'CSE' },
    { value: 'eee', viewValue: 'EEE' },
    { value: 'ce', viewValue: 'CE' },
    { value: 'ice', viewValue: 'ICE' },
    { value: 'english', viewValue: 'ENGLISH' },
    { value: 'llb', viewValue: 'LLB' }
  ];




  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private http: HttpClient, private activ: ActiveService ) { }

  ngOnInit() {
    this.activ.activateMenu('student', 'addstudent');
  }

  saveStudent() {
    this.stu['password'] = this.stu['dept_id'] + 10000000;
    console.log(this.stu['password']);
    this.http.post('/api/addstudent', this.stu)
      .subscribe(res => {
        const id = res['_id'];
        this.router.navigate(['/moreinformation', id]);
        this.toastr.success('Successfully Data Added!');
      }, (err) => {
        console.log(err);
        this.toastr.error('Error Happened! Department Id may be used!', 'ERROR!', {
          timeOut: 5000
        });
      }
      );
  }

}
