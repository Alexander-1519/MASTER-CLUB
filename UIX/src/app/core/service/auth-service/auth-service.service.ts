import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DataForNewUser, UserAuthRequest } from "../../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public registration(body: DataForNewUser): Observable<DataForNewUser> {
    return this.http.post('http://localhost:8080/api/v1/register',body)
  }

  public login(body: UserAuthRequest): Observable<UserAuthRequest | any> {
    return this.http.post('http://localhost:8080/api/v1/login', body)
  }
}
