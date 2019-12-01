import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActiveService } from '../../../services/active/active.service';
import { ToastrService } from 'ngx-toastr';
import { stringify } from '@angular/core/src/render3/util';

declare var $: any;

export interface Sample {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-moreinformation',
  templateUrl: './moreinformation.component.html',
  styleUrls: ['./moreinformation.component.css']
})
export class MoreinformationComponent implements OnInit {

  stu = {};
  student = {};

  bloods: Sample[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'O+', viewValue: 'O+' },
    { value: 'O-', viewValue: 'O-' }
  ];
  religions: Sample[] = [
    { value: 'Islam', viewValue: 'Islam' },
    { value: 'Hindu', viewValue: 'Hindu' },
    { value: 'Christianity', viewValue: 'Christianity' },
    { value: 'Buddhasm', viewValue: 'Buddhasm' },
    { value: 'Others', viewValue: 'Others' }
  ];
  maritals: Sample[] = [
    { value: 'Single', viewValue: 'Single' },
    { value: 'Married', viewValue: 'Married' }
  ];
  boards: Sample[] = [
    { value: 'Rajshahi', viewValue: 'Rajshahi' },
    { value: 'Chittagong', viewValue: 'Chittagong' },
    { value: 'Dhaka', viewValue: 'Dhaka' },
    { value: 'Rangpur', viewValue: 'Rangpur' },
    { value: 'Khulna', viewValue: 'Khulna' },
    { value: 'Comilla', viewValue: 'Comilla' },
    { value: 'Barisal', viewValue: 'Barisal' },
  ];
  grades: Sample[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A', viewValue: 'A' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B', viewValue: 'B' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'C', viewValue: 'C' },
    { value: 'C-', viewValue: 'C-' },
    { value: 'D', viewValue: 'D' }
  ];
  quotas: Sample[] = [
    { value: 'Disability', viewValue: 'Disability' },
    { value: 'Freedom Fighter', viewValue: 'Freedom Fighter' },
    { value: 'Distinct', viewValue: 'Distinct' },
    { value: 'Government', viewValue: 'Government' }
  ];


  // tslint:disable-next-line:no-inferrable-types
  selectedIndex: number = 0;
  // clickMe() {
  //   console.log('yes click me');
  //   if (this.selectedIndex < 4) {
  //     this.selectedIndex = this.selectedIndex + 1;
  //   } else {
  //     this.selectedIndex = 0;
  //   }
  // }



  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private activ: ActiveService, private toastr: ToastrService) { }

  ngOnInit() {
    this.activ.activateMenu('student', 'addstudent');
    this.getData(this.route.snapshot.params['id']);
  }

  getData(id) {
    this.http.get('/api/student/' + id).subscribe(data => {
      this.stu = data;
    });
  }



  update_basic(id, student) {
    const v = JSON.stringify(student);
    console.log(v);
    this.http.put('/api/student/' + id, student)
      .subscribe(res => {
        console.log('responsed data: ' + res);
        this.toastr.success('Successfully Data Added!');
        if (this.selectedIndex < 4) {
          this.selectedIndex = this.selectedIndex + 1;
        } else {
          this.selectedIndex = 0;
        }
      }, (err) => {
        console.log(err);
      }
      );
  }
  final_update(id, stu) {
    this.http.put('/api/student/' + id, stu).subscribe(res => {
      this.router.navigate(['/addstudent']);
      this.toastr.success('Successfully all Data are Updated!');
    }, (err) => {
      console.log(err);
    });
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }
  conv(val) {
    // tslint:disable-next-line:radix
    return parseInt(val);
  }


}
