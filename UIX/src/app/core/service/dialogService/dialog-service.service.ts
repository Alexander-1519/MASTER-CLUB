import {
  Injectable,OnInit
} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DialogService implements OnInit{

  private modals: any[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }

  test(): Observable<any> {
   return  this.http.post('http://localhost:8080/api/v1/users',{
     username: "ryhnik4",
     password: "$2a$10$fixT7t0.VhX8PReWqukUe.u46ptqpFt0TmMfqWlaBgBU3auwAqFc6",
     email: "alexander4.rybak2020@gmail.com",
   })

  }

  add(modal: any) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }

  close(id: string) {
    let modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
