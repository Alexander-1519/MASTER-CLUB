import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { animate, animateChild, query, state, style, transition, trigger } from "@angular/animations";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { dataForNewUser, dateForNewUserStepOne } from "../../shared/interfaces";

@Component({
  selector: 'master-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    trigger('modalDisplay',[
      state('start', style({
        opacity: '0',
      })),
      state('end', style({
        opacity: '1'
      })),
      transition('start => end',animate(100)),
      transition('end => start',animate(100)),
    ]),
    trigger('backDropDisplay',[
      state('start', style({
        opacity: '0',
      })),
      state('end', style({
        opacity: '1'
      })),
      transition('start => end',animate(100)),
      transition('end => start',animate(100)),
    ])
  ]
})
export class AuthenticationComponent implements OnInit {
  public faTimes = faTimes;

  public state: string = 'start';
  public isModalClose: boolean = false;
  public dataForNewUser?: dataForNewUser;
  public userDataStepOne?: dateForNewUserStepOne;


  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{ this.state = 'end'},)
  }

  closeModal() {
     this.isModalClose = true;
    setTimeout(()=>{ this.state = 'start'},)
      this.close.emit()
  }

  nextStepData(data: dateForNewUserStepOne) {
    this.userDataStepOne = data;
    console.log(this.userDataStepOne)
  }
}
