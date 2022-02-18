import { Component, ComponentFactoryResolver, OnInit,} from '@angular/core';
import { DialogService } from '../../core/service/dialogService/dialog-service.service';
import { authStrings } from '../../strings/auth-strigs';
import {AuthService} from "../../core/service/auth-service/auth-service.service";
@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public strings = authStrings;
  public isMailOVerification: boolean = false

  constructor(private dialogService: DialogService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.dialogService.open(id);
  }

  approveEmail() {
    this.auth.approveEmail().subscribe(data=>{
    this.isMailOVerification = true
    })
  }

}
