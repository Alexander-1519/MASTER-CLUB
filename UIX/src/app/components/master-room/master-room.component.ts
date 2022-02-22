import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/service/auth-service/auth-service.service";
import {UserInfo} from "../../shared/interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../sign-up/second-step-sign-up/second-step-sign-up.component";
import {MasterRoomService} from "../../core/service/master-room/master-room.service";
import {masterStrings} from "../../strings/masterRoom";
import {faFileUpload, faPlus, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {DialogService} from "../../core/service/dialogService/dialog-service.service";
import {MasterAddServiceComponent} from "./master-add-service/master-add-service.component";

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
  public faPlus = faPlus;
  public images = [{path: 'https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg'},
    {path: 'https://w-dog.ru/wallpapers/9/15/458745441613494/vajoming-ssha-grand-teton-nacionalnyj-park-snejk-river-grand-titon-nacionalnyj-park-zakat-oblaka-vecher-gory-pole-cvety-zelen-les-derevya-sosny.jpg'},
    {path: 'https://get.wallhere.com/photo/coniferous-forest-mountains-height-greatness-green-landscape-1070576.jpg'},
    {path: 'https://get.wallhere.com/photo/coniferous-forest-mountains-height-greatness-green-landscape-1070576.jpg'},]
  public form: FormGroup = new FormGroup({
    aboutMe: new FormControl(''),
    maintenance: new FormControl(''),
    workDate: new FormControl(''),
    portfolio: new FormControl(''),
  });

  constructor(public auth: AuthService, private fb: FormBuilder, private msRoom: MasterRoomService, private dialogService: DialogService) {
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
    this.isLoading = false;
    this.auth.getUserinfo().subscribe((data) =>
    {
      this.userInfo = data;
      this.isLoading = false;
    })
  }

  public edit() {
    this.isLoading = true;
    this.auth.getUserinfo().subscribe((data) =>
    {
      if(!data.approved) {
        this.isEdited = true;
      }
      setTimeout(()=>this.isLoading = false, 500)
    })
  }

  public addService() {
    this.dialogService.openDialog(MasterAddServiceComponent, (instance: MasterAddServiceComponent, close)=> {
      instance.close$.subscribe(()=> {
        close({close: true})
      })
    })
  }
  kek(e: any) {
    console.log(e.target.files)
  }
}
