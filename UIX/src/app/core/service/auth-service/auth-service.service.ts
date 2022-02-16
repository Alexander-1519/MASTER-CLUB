import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { dataForNewUser } from "../../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public registration(body:dataForNewUser):Observable<dataForNewUser> {
    return  this.http.post('http://localhost:8080/api/v1/register',body)
  }

  public login(): Observable<any> {
    return  this.http.post('http://localhost:8080/api/v1/login',{
      username: "ryhnik4",
      password: "23234234233",
      email: "alexander4.rybak2020@gmail.com",
    })
  }

  public checkEmail(body: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/check-email',{email: body})
  }
}
