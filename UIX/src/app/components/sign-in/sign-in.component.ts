import { Component, OnInit } from '@angular/core';
import { authStrings } from "../../strings/auth-strigs";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Validation } from "../sign-up/second-step-sign-up/second-step-sign-up.component";
import { dataForUserLogin } from "../../shared/interfaces";

@Component({
  selector: 'master-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public strings = authStrings
  public  signin = false;

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  public hidePassword = true;

  public dataForSignIn?: dataForUserLogin;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      })
    this.form.valueChanges.subscribe(()=> this.signin = false)
  }

  onSignin(): void {
    this.signin = true;
    if (this.form.invalid) {
      return;
    }

    this.dataForSignIn = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    console.log(this.dataForSignIn)
  }


}
