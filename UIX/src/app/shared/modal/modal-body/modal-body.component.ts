import {
  Component,
  Input,
  OnInit,
  ElementRef, Output, EventEmitter, ViewChild
} from '@angular/core';
import { DialogService } from "../../../core/service/dialogService/dialog-service.service";

import { SignInComponent } from "../../../components/sign-in/sign-in.component";

@Component({
  selector: 'master-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss'],
})
export class ModalBodyComponent implements OnInit {

  private readonly element: any;

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {


    //
    // this.element.addEventListener('click', function (e: any) {
    //   if (e.target.classList.contains('modal__backdrop')) {
    //     modal.close();
    //   }
    // });
    //
    // this.dialogService.add(this);
  }


}
