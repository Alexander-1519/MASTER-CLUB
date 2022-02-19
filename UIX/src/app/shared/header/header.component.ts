import { Component, ComponentFactoryResolver, OnInit,} from '@angular/core';
import { DialogService } from '../../core/service/dialogService/dialog-service.service';
import { authStrings } from '../../strings/auth-strigs';
import { SignInComponent } from "../../components/sign-in/sign-in.component";
@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public strings = authStrings
  constructor(private resolver: ComponentFactoryResolver, private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  openModal(id: string) {
    // this.dialogService.open(id, SignInComponent);
    this.dialogService.openDialog(SignInComponent,(instance: SignInComponent, close) => {
      instance.close$.subscribe(res => {
        close({ close: true });
        console.log(111)});
    });
  }

}
