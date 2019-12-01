import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/observable';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DatatableService {
private url = '/api/student/';
private geturl = '/api/student/';
private cgpaurl = '/api/cgpa/';
private semurl = '/api/semester/';
private courseurl = '/api/updateresult/';

  constructor(private http: Http , private https: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.https.get<User[]>(this.url);
  }

  getDatas(id) {
    return this.http.get(this.geturl + id)
      .map((data: Response) => data.json());
  }

  createDatas(datas) {
    return this.http.post(this.url, datas)
      .map((data: Response) => data.json());
  }

  updateDatas(id, datas) {
    return this.http.put(this.geturl + id, datas)
      .map((data: Response) => data.json());
  }

  updatecgpa(id, datas) {
    return this.http.put(this.cgpaurl + id, datas)
      .map((data: Response) => data.json());
  }
  updateSemester(id, datas) {
    const r = JSON.stringify(datas);
    console.log('in the up sem :' + r);
    return this.http.put(this.semurl + id, datas)
      .map((data: Response) => data.json());
  }

  insertCourse(id, datas) {
    const m = JSON.stringify(datas);
    console.log('course obj in insrt:' + m);
    return this.http.put(this.courseurl + id, datas)
      .map((data: Response) => data.json());
  }

  getCourses() {
    return this.http.get('/api/course/')
      .map((data: Response) => data.json());
  }
  getCourse(val) {
    console.log('value in getCourse:' + val);
    return this.http.get('/api/coursebyname/' + val)
      .map((data: Response) => data.json());
  }

  addCourses(datas) {
    return this.http.post('api/addcourse', datas)
    .map((data: Response) => data.json());
  }

  deleteCourse(id) {
  return this.http.delete('api/deletecourse/' + id)
    .map((data: Response) => data.json());
  }

  deleteSemCourse(id, sem, semid) {
    return this.http.put('api/pullcourse/' + id + '/' + sem + '/' + semid, semid);
  }

  editCourse(selectsem, courseid) {
    return this.http.get('api/getcourse/' + selectsem + '/' + courseid)
    .map((data: Response) => data.json());
  }

  updatacourseres(id, selectsem, datas) {
    return this.http.put('api/updatecourseresult/' + id + '/' + selectsem, datas)
      .map((data: Response) => data.json());
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
