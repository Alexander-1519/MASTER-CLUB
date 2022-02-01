import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { dateForNewUserStepOne } from "../../../shared/interfaces";

@Component({
  selector: 'master-first-step-auth',
  templateUrl: './first-step-auth.component.html',
  styleUrls: ['./first-step-auth.component.scss']
})
export class FirstStepAuthComponent implements OnInit {

  public email = new FormControl('', [Validators.required, Validators.email]);
  public isNextStep = false;
  public chosen = true
  @Output() nextStepData =  new EventEmitter<dateForNewUserStepOne>()
  constructor() { }

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
}
