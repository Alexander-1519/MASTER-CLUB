import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleComponent } from './auth-module.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{ path: '', component: AuthModuleComponent }];

@NgModule({
  declarations: [
    AuthModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModuleModule { }
