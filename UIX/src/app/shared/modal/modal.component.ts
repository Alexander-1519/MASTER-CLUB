import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'master-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showBackgroundMask = true;
  @Input() closeOnClickOutside = true;
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClickOutside(e: any) {
    console.log()
    if (e.target.classList.contains('modal__container') && this.closeOnClickOutside) {
      this.doClose();
    }
  }

  doClose() {
    this.close.emit();
    this.removeMask();
  }

  removeMask() {
    this.showBackgroundMask = false;
  }
}
