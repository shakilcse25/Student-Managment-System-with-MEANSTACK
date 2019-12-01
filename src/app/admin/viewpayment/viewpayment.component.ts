import { Component, OnInit } from '@angular/core';
import { ActiveService } from '../../services/active/active.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

export interface Fee {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.css']
})
export class ViewpaymentComponent implements OnInit {

  fees: Fee[] = [
    { value: 'ad-0', viewValue: 'Admission Fee' },
    { value: 'sem-1', viewValue: 'Semester Fee' },
    { value: 'other-2', viewValue: 'Other Fee' }
  ];

  constructor(private activ: ActiveService, private router: Router, private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.activ.activateMenu('payment', 'viewpayment');
  }

}
