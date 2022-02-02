import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { dataForNewUser } from "../../shared/interfaces";

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

  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {}

  dataAfterFirstStep(data: dataForNewUser) {
    this.dataForNewUser = data;
  }

  dataAfterLastStep(data: dataForNewUser) {
    this.dataForNewUser = {...this.dataForNewUser, ...data }
    console.log(this.dataForNewUser)
  }
}
