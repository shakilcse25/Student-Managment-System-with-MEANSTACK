import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stunav',
  templateUrl: './stunav.component.html',
  styleUrls: ['./stunav.component.css']
})
export class StunavComponent implements OnInit {
  basic = {};
  edu = {};
  bill = {};
  stus = {};
  b = 0;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const id = localStorage.getItem('_id');
    if ( localStorage.getItem('token')) {
      this.b = 1;
      this.getstudentDetail(id);
    }

  }

  logout() {
    localStorage.clear();
    this.b = 0;
    this.router.navigate(['student/login']);
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
