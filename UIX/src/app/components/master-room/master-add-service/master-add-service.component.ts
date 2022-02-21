import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {} from "../../../strings/auth-strigs";
import {masterStrings} from "../../../strings/master";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'master-add-service',
  templateUrl: './master-add-service.component.html',
  styleUrls: ['./master-add-service.component.scss']
})
export class MasterAddServiceComponent implements OnInit {

  @Output() close$ = new EventEmitter()

  public strings = masterStrings;
  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  closeModal() {
    this.close$.emit()
  }
}
