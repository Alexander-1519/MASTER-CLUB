import { Component, OnInit,} from '@angular/core';
import { DialogService } from '../../core/service/dialogService/dialog-service.service';
import { authStrings } from '../../strings/auth-strigs';
import {AuthService} from "../../core/service/auth-service/auth-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public strings = authStrings;
  public isMailOVerification: boolean = false
  public isLogin = '';

  constructor(private dialogService: DialogService, private auth: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.isLogin =`${localStorage.getItem('token')}`;
  }

  openModal(id: string) {
    this.dialogService.open(id);
  }

  approveEmail() {
    this.auth.approveEmail().subscribe(data=>{
    this.isMailOVerification = true
    })
  }

  openMastersRoom() {
    this.route.navigate(['/master-room'])
  }

}
