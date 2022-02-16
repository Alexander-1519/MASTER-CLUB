import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataForNewUser } from "../../shared/interfaces";
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
  public dataForNewUser?: DataForNewUser;

  @Output() close = new EventEmitter<void>();
  constructor(public auth: AuthService, public dialogService: DialogService) { }

  ngOnInit(): void {}

  dataAfterFirstStep(data: DataForNewUser) {
    this.dataForNewUser = data;
  }

  dataAfterLastStep(data: DataForNewUser) {
    this.dataForNewUser = {...this.dataForNewUser, ...data }
    console.log(this.dataForNewUser)

    this.auth.registration(this.dataForNewUser).subscribe((data: any)=>{
      this.dialogService.close('signup')
    })
  }
}
