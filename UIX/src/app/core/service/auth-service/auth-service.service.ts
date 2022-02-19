import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponse, dataForNewUser, dataForUserLogin, UserInfo} from "../../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public registration(body:dataForNewUser):Observable<dataForNewUser> {
    return  this.http.post<dataForNewUser>('http://localhost:8080/api/v1/register',body)
  }

  public login(body:dataForUserLogin ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/v1/login',body)
  }

  public checkEmail(body: string): Observable<{email: string}> {
    return this.http.post<{email: string}>('http://localhost:8080/api/v1/check-email',{email: body})
  }

  public getUserinfo(): Observable<UserInfo> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = { headers: headers };
    return this.http.get<UserInfo>('http://localhost:8080/api/v1/users/current-user', options)
  }

  public approveEmail(): Observable<null> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    const options = { headers: headers };
    return this.http.post<null>('http://localhost:8080/api/v1/approve-email', null ,options )
  }
}
