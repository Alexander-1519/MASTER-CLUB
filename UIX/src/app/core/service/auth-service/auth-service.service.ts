import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponse, dataForNewUser, dataForUserLogin} from "../../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public registration(body:dataForNewUser):Observable<dataForNewUser> {
    return  this.http.post('http://localhost:8080/api/v1/register',body)
  }

  public login(body:dataForUserLogin ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/v1/login',body)
  }

  public checkEmail(body: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/check-email',{email: body})
  }

  public approveEmail() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = { headers: headers };
    return this.http.post('http://localhost:8080/api/v1/approve-email', null ,options )

  }
// { headers: new HttpHeaders({'Authorization': 'Bearer_ ' + localStorage.getItem('token')}) }
}
