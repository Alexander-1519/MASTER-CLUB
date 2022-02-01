import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'master-second-step-auth',
  templateUrl: './second-step-auth.component.html',
  styleUrls: ['./second-step-auth.component.scss']
})
export class SecondStepAuthComponent implements OnInit {

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  constructor( private fb: FormBuilder) { }
  submitted = false;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  public hidePassword = true;
  public hideConfirmPassword = true;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
    },
      {
      validators: [Validation.match('password', 'confirmPassword')]
    })

    this.form.valueChanges.subscribe(()=> this.submitted = false)
  }



  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

}

export class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}

