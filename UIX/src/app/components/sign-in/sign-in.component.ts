import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {authStrings} from "../../strings/auth-strigs";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {dataForUserLogin} from "../../shared/interfaces";
import {AuthService} from "../../core/service/auth-service/auth-service.service";
import {role} from "../../strings/role";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'master-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() close$ = new EventEmitter();

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public strings = authStrings;
  public stringsRole = role;
  public signin = false;

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  public hidePassword = true;

  public dataForSignIn?: dataForUserLogin;

  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
    this.form.valueChanges.subscribe(() => this.signin = false)
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
    this.auth.login(this.dataForSignIn).pipe(switchMap(data => {
      localStorage.setItem('token', `${data.token}`)
      return this.auth.getUserinfo()
    }))
      .subscribe(data => {
          this.close$.emit();
        },
        (error => console.log(error)))

    console.log(this.dataForSignIn)
  }

  closeModal() {
    this.close$.emit()
  }
}
