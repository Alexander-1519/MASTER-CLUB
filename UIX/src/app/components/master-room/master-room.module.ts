import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoomComponent } from './master-room.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MasterRoomService} from "../../core/service/master-room/master-room.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SpinnerModule} from "../../shared/loading/loading.module";
import { MasterAddServiceComponent } from './master-add-service/master-add-service.component';
import {ModalModule} from "../../shared/modal/modal.module";

const routes: Routes = [{ path: '', component: MasterRoomComponent }];

@NgModule({
  declarations: [
    MasterRoomComponent,
    MasterAddServiceComponent,
  ],
  providers: [MasterRoomService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FontAwesomeModule,
    SpinnerModule,
    ModalModule
  ],
  exports: [RouterModule]
})
export class MasterRoomModule { }
