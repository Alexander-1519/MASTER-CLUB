import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { authStrings } from "../../strings/auth-strigs";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Validation } from "../sign-up/second-step-sign-up/second-step-sign-up.component";
import { DataForNewUser, dataForUserLogin, UserAuthRequest } from "../../shared/interfaces";
import { AuthService } from "../../core/service/auth-service/auth-service.service";
import { DialogService } from "../../core/service/dialogService/dialog-service.service";

@Component({
  selector: 'master-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  public close$ =  new EventEmitter<DataForNewUser>()
  public strings = authStrings
  public  signin = false;

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  public hidePassword = true;

  public dataForSignIn?: UserAuthRequest;

  constructor(private fb: FormBuilder, private auth: AuthService,public dialogService: DialogService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      })
    this.form.valueChanges.subscribe(()=> this.signin = false)
  }

  onSignIn(): void {
    this.signin = true;
    if (this.form.invalid) {
      return;
    }

    this.dataForSignIn = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    this.auth.login(this.dataForSignIn).subscribe((data: any) =>  {
      console.log(data)
    })
    console.log(this.dataForSignIn)
  }

  close() {
    this.close$.emit()
  }

  closeModal() {
    this.close$.emit()
  }
}
