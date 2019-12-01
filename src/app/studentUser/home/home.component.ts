import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stu = {};
  basic = {};
  edu = {};
  bill = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const _id = localStorage.getItem('_id');
    this.getstudentDetail(_id);
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
