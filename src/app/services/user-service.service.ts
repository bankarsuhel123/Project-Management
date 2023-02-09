import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Object } from '../modules/data';
import { category, department, divison, location, priority, project, status, type } from '../modules/project';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  postData(data: any) {
    return this.http.post('http://localhost:3000/user', data)
  }

  getData(data: any) {
    return this.http.get('http://localhost:3000/user?email=${data.email}&password=${data.password}',
      { observe: 'response' }).subscribe((result: any) => {
        console.log(result)
        if (result && result.body && result.body.length) {
          console.log('user logged in')
          localStorage.setItem('seller', JSON.stringify(result.body[0]))
          this.router.navigate([''])

        }
        else {
          console.log('login failed')
        }
      })
    // console.log(data)
  }
  getReasonData() {
    return this.http.get<project[]>(`http://localhost:3000/reason`)
  }
  gettypeData() {
    return this.http.get<type[]>("http://localhost:3000/type")
  }
  getDivisonData() {
    return this.http.get<divison[]>("http://localhost:3000/division")
  }
  getcategoryData() {
    return this.http.get<category[]>("http://localhost:3000/category")
  }
  getPriorityData() {
    return this.http.get<priority[]>("http://localhost:3000/priority")
  }
  getDepartmentData() {
    return this.http.get<department[]>("http://localhost:3000/department")
  }
  getlocationData() {
    return this.http.get<location[]>("http://localhost:3000/location")
  }
  getStatusData() {
    return this.http.get<status[]>("http://localhost:3000/status")
  }
  saveProjectData(data: Object) {
    return this.http.post("http://localhost:3000/userData", data)
  }
  getUserdata() {
    return this.http.get<Object[]>(`http://localhost:3000/userData`)
  }
}
