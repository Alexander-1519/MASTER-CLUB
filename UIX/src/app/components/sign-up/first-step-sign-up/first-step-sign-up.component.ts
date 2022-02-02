import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { dataForNewUser } from "../../../shared/interfaces";
import { DialogService } from "../../../core/service/dialogService/dialog-service.service";

@Component({
  selector: 'master-first-step-auth',
  templateUrl: './first-step-sign-up.component.html',
  styleUrls: ['./first-step-sign-up.component.scss']
})
export class FirstStepSignUpComponent implements OnInit {

  public email = new FormControl('', [Validators.required, Validators.email]);
  public isNextStep = false;
  public chosen = true
  @Output() nextStepData =  new EventEmitter<dataForNewUser>()
  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Введите электронную почту*';
    }
    return this.email.hasError('email') ? 'Введена не валидная электронная почта*' : '';
  }

  nextStep() {
    this.isNextStep = true
    if(!this.email.hasError('required') && !this.email.hasError('email'))
    {
      this.nextStepData.emit({
        email: this.email.value,
        role: +this.chosen,
      })
    }
  }

  chooseRole(e: any) {
   this.chosen = e.target.classList.contains('registration__client');
  }

  removeError() {
    this.isNextStep = false
  }

  openSignIModal(id: string) {
    this.dialogService.close('signup')
    this.dialogService.open(id)
  }
}
