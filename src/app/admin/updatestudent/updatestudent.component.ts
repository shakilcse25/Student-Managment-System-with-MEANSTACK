import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
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
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private toastr: ToastrService) { }
  stu = {};
  upstu = {};
  subjects: Subject[] = [
    { value: 'Science', viewValue: 'Science' },
    { value: 'Commerce', viewValue: 'Commerce' },
    { value: 'Arts', viewValue: 'Arts' }
  ];

  batches: Batch[] = [
    { value: '1', viewValue: '1st' },
    { value: '2', viewValue: '2nd' },
    { value: '3', viewValue: '3rd' },
    { value: '4', viewValue: '4th' },
    { value: '5', viewValue: '5th' },
    { value: '6', viewValue: '6th' },
    { value: '7', viewValue: '7th' },
    { value: '8', viewValue: '8th' },
    { value: '9', viewValue: '9th' },
    { value: '10', viewValue: '10th' },
    { value: '11', viewValue: '11th' }
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



  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  getData(id) {
    this.http.get('/api/student/' + id).subscribe(data => {
      this.stu = data;
      console.log(id);
      console.log(this.stu);
    });
  }

  saveStudent(id) {
    this.http.put('/api/student/' + id, this.stu)
      .subscribe(res => {
        const ids = res['_id'];
        console.log(ids);
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
