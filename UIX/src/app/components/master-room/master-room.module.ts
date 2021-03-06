import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoomComponent } from './master-room.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MasterRoomService} from "../../core/service/master-room/master-room.service";
import {AppModule} from "../../app.module";
import {LoadingComponent} from "../../shared/loading/loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SpinnerModule} from "../../shared/loading/loading.module";

const routes: Routes = [{ path: '', component: MasterRoomComponent }];

@NgModule({
  declarations: [
    MasterRoomComponent,
  ],
  providers: [MasterRoomService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FontAwesomeModule,
    SpinnerModule
  ],
  exports: [RouterModule]
})
export class MasterRoomModule { }
