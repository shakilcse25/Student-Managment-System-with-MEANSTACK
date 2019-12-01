import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  stu = {};
  basic  = {};
  edu  = {};
  bill  = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getstudentDetail(this.route.snapshot.params['id']);
  }
  getstudentDetail(id) {
    this.http.get('api/student/' + id).subscribe(data => {
      this.stu = data;
      this.basic = data['basic_info'];
      this.edu = data['educational_info'];
      this.bill = data['billing_info'];
    });
  }

}
