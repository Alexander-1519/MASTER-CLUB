import {Component, OnInit,} from '@angular/core';
import {DialogService} from '../../core/service/dialogService/dialog-service.service';
import {authStrings} from '../../strings/auth-strigs';
import {AuthService} from "../../core/service/auth-service/auth-service.service";
import {Router} from "@angular/router";
import {SignInComponent} from "../../components/sign-in/sign-in.component";
import {SignUpComponent} from "../../components/sign-up/sign-up.component";
import {UserService} from "../../core/service/user-service/user-service.service";

@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public strings = authStrings;
  public isMailOVerification: boolean = false
  public isLogin = false;

  constructor(private dialogService: DialogService, private auth: AuthService, private route: Router,
              public userService: UserService) {
  }

  ngOnInit(): void {
    this.isLogin = !!localStorage.getItem('token');
  }

  openSignIn() {
    this.dialogService.openDialog(SignInComponent, (instance: SignInComponent, close) => {
      instance.close$.subscribe(res => {
        close({close: true});
        this.isLogin = !!localStorage.getItem('token')
      });
    });
  }

  openSignUp() {
    this.dialogService.openDialog(SignUpComponent, (instance: SignUpComponent, close) => {
      instance.close$.subscribe(res => {
        close({close: true});
        console.log(111)
      });
    });
  }

  approveEmail() {
    this.auth.approveEmail().subscribe(data => {
      this.isMailOVerification = true
    })
  }

  openMastersRoom() {
    this.route.navigate(['/master-room'])
  }

  close() {
    localStorage.removeItem('token');
    this.isLogin = false;
  }

}
