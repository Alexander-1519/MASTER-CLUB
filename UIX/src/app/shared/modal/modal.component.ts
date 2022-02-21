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

  handleClickOutside() {
    if (this.closeOnClickOutside) {
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
