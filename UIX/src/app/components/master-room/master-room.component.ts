import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/service/auth-service/auth-service.service";
import {UserInfo} from "../../shared/interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../sign-up/second-step-sign-up/second-step-sign-up.component";
import {MasterRoomService} from "../../core/service/master-room/master-room.service";
import {masterStrings} from "../../strings/masterRoom";
import {faFileUpload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'master-master-room',
  templateUrl: './master-room.component.html',
  styleUrls: ['./master-room.component.scss']
})
export class MasterRoomComponent implements OnInit {

  public userInfo?: UserInfo;
  public strings = masterStrings;
  public isEmailApproved = false;
  public isEdited = false;
  public isLoading = false;
  public faFileUpload = faFileUpload;

  public form: FormGroup = new FormGroup({
    aboutMe: new FormControl(''),
    maintenance: new FormControl(''),
    workDate: new FormControl(''),
    portfolio: new FormControl(''),
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private msRoom: MasterRoomService) {
    this.form = this.fb.group({
        aboutMe: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3000)]],
        maintenance: ['', [Validators.required]],
        workDate: ['', [Validators.required,]],
        portfolio: ['', Validators.required],
      },)
  }

  ngOnInit(): void {
    this.init()
  }

  public init() {
    this.auth.getUserinfo().subscribe((data) =>
    {
      this.userInfo = data;
    })
  }

  public edit() {
    this.isLoading = true;
    this.auth.getUserinfo().subscribe((data) =>
    {
      if(!data.approved) {
        this.isEmailApproved = true;
        this.isEdited = true;
      }
      setTimeout(()=>this.isLoading = false, 500)
    })
  }
}
