import {
  Component,
  Input,
  OnInit,
  ElementRef, Output, EventEmitter, ViewChild
} from '@angular/core';
import { DialogService } from "../../core/service/dialogService/dialog-service.service";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { dataForNewUser } from "../interfaces";
import { SignInComponent } from "../../components/sign-in/sign-in.component";

@Component({
  selector: 'master-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
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
    // trigger('backDropDisplay',[
    //   state('start', style({
    //     opacity: '0',
    //   })),
    //   state('end', style({
    //     opacity: '1'
    //   })),
    //   transition('start => end',animate(100)),
    //   transition('end => start',animate(100)),
    // ])
  ]
})
export class ModalComponent implements OnInit {
  @Input() id: string = ''
  @Input() title: string = '';
  @Output() closeModal =  new EventEmitter()

  @ViewChild(SignInComponent) private myComp: any;
  private readonly element: any;
  public faTimes = faTimes;

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    modal.close()

    this.element.addEventListener('click', function (e: any) {
      if (e.target.classList.contains('modal__backdrop')) {
        modal.close();
      }
    });

    this.dialogService.add(this);
  }

  ngOnDestroy(): void {
    this.dialogService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
  }

  close(): void {
    this.element.style.display = 'none';
    this.closeModal.emit()
  }
}
