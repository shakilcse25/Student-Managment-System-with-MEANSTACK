import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ActiveService } from '../../services/active/active.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stlogin',
  templateUrl: './stlogin.component.html',
  styleUrls: ['./stlogin.component.css']
})
export class StloginComponent implements OnInit {
  login = {};

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private http: HttpClient) { }

  ngOnInit() {
  }

  loginStudent(data) {
    this.http.post('/api/login_student', data)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res['token']);
        localStorage.setItem('_id', res['_id']);
        this.router.navigate(['/student/home']);
      }, (err) => {
        console.log(err);
        this.toastr.error('Invalid Login!!!', 'ERROR!', {
          timeOut: 5000
        });
      }
      );
  }

}
