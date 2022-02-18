import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {dataForNewUser, ErrorObject} from "../../shared/interfaces";
import { AuthService} from "../../core/service/auth-service/auth-service.service";
import { DialogService } from "../../core/service/dialogService/dialog-service.service";

@Component({
  selector: 'master-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public faTimes = faTimes;
  public state: string = 'start';
  public isModalClose: boolean = false;
  public dataForNewUser?: dataForNewUser;
  public errorText = '';

  @Output() close = new EventEmitter<void>();
  constructor(public auth: AuthService, public dialogService: DialogService) { }

  ngOnInit(): void {}

  dataAfterFirstStep(data: dataForNewUser) {
    this.dataForNewUser = data;
  }

  dataAfterLastStep(data: dataForNewUser) {
    this.dataForNewUser = {...this.dataForNewUser, ...data }
    this.auth.registration(this.dataForNewUser).subscribe((data: any)=>{
      this.dialogService.close('signup')
    },(error: ErrorObject) => this.errorText = error.error.message)
  }
}
