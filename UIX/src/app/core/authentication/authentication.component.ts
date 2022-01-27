import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { animate, animateChild, query, state, style, transition, trigger } from "@angular/animations";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  //icon
  public faTimes = faTimes;

  public state: string = 'start';
  public isModalClose: boolean = false;
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{ this.state = 'end'},)
  }


  cambiar_login() {
    // @ts-ignore
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    // @ts-ignore
    document.querySelector('.cont_form_login').style.display = "block";
    // @ts-ignore
    document.querySelector('.modal__close-login-active') ? document.querySelector('.modal__close-login-active').className = "modal__close": null
    // @ts-ignore
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    // @ts-ignore
    setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);

    setTimeout(function(){
      // @ts-ignore
      document.querySelector('.cont_form_sign_up').style.display = "none";
    },200);
  }

  cambiar_sign_up() {
    // @ts-ignore
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    // @ts-ignore
    document.querySelector('.modal__close').className = "modal__close-login-active";
    // @ts-ignore
    document.querySelector('.cont_form_sign_up').style.display = "block";
    // @ts-ignore
    document.querySelector('.cont_form_login').style.opacity = "0";
    // @ts-ignore
    setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
    },100);
    // @ts-ignore
    setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
    },400);
  }

  ocultar_login_sign_up() {
// @ts-ignore
    document.querySelector('.cont_forms').className = "cont_forms";
    // @ts-ignore
    document.querySelector('.modal__close-login-active') ? document.querySelector('.modal__close-login-active').className = "modal__close": null
    // @ts-ignore
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    // @ts-ignore
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function(){
      // @ts-ignore
      document.querySelector('.cont_form_sign_up').style.display = "none";
      // @ts-ignore
      document.querySelector('.cont_form_login').style.display = "none";
    },500);
  }

  closeModal() {
     this.isModalClose = true;
    setTimeout(()=>{ this.state = 'start'},)
      this.close.emit()
  }
}
