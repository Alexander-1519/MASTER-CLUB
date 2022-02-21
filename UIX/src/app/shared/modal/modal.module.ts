import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ModalBodyComponent} from "./modal-body/modal-body.component";
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ModalComponent} from "./modal.component";
import {LoadingComponent} from "../loading/loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalComponent,
  ],
    exports: [
        ModalBodyComponent,
        ModalFooterComponent,
        ModalComponent,
        ModalHeaderComponent,
    ]
})
export class ModalModule {
}
