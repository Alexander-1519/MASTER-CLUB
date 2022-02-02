import { Component, ComponentFactoryResolver, OnInit,} from '@angular/core';
import { DialogService } from "../../core/service/dialogService/dialog-service.service";
import { authStrings } from "../../strings/auth-strigs";
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
    this.dialogService.open(id);
  }

}
