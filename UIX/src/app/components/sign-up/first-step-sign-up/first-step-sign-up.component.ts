import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {dataForNewUser, ErrorObject} from "../../../shared/interfaces";
import {DialogService} from "../../../core/service/dialogService/dialog-service.service";
import {authStrings} from "../../../strings/auth-strigs";
import {AuthService} from "../../../core/service/auth-service/auth-service.service";
import {SignUpComponent} from "../sign-up.component";
import {SignInComponent} from "../../sign-in/sign-in.component";

@Component({
  selector: 'master-first-step-auth',
  templateUrl: './first-step-sign-up.component.html',
  styleUrls: ['./first-step-sign-up.component.scss']
})
export class FirstStepSignUpComponent implements OnInit {

  public email = new FormControl('', [Validators.required, Validators.email]);
  public isNextStep = false;
  public chosen = true;
  public strings = authStrings;
  public errorMessage?: ErrorObject;
  public isLoading = false;
  @Output() nextStepData = new EventEmitter<dataForNewUser>()

  constructor(private dialogService: DialogService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Введите электронную почту*';
    }
    if (this.errorMessage?.error.message) {
      return this.errorMessage.error.message
    }
    return this.email.hasError('email') ? 'Введена не валидная электронная почта*' : '';
  }

  nextStep() {
    this.isLoading = true;
    this.isNextStep = true
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      this.auth.checkEmail(this.email.value).subscribe((data) => {
        this.nextStepData.emit({
          email: this.email.value,
          role: this.chosen ? `${this.strings.master}` : `${this.strings.user}`,
        })
        this.isLoading = false;
      }, (error => {
        this.errorMessage = error
        this.isLoading = false;
      }))
    }
  }

  chooseRole(e: any) {
    this.chosen = e.target.classList.contains('registration__client');
  }

  removeError() {
    this.isNextStep = false
  }

  openSignIModal() {
    this.dialogService.openDialog(SignInComponent, (instance: SignInComponent, close) => {
      instance.close$.subscribe(res => {
        close({close: true});
        console.log(111)
      });
    });
  }
}
