import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'master-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {

  public faTimes = faTimes;
  @Input() title = '';
  @Output() close = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit()
  }
}
