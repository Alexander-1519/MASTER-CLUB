import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./core/material/material.module";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RefDirective } from "./core/directives/ref.directive";
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstStepSignUpComponent } from './components/sign-up/first-step-sign-up/first-step-sign-up.component';
import { SecondStepSignUpComponent } from './components/sign-up/second-step-sign-up/second-step-sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ModalBodyComponent } from './shared/modal/modal-body/modal-body.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from "@angular/common/http";
import { LoadingComponent } from './shared/loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ModalModule} from "./shared/modal/modal.module";
import {MasterRoomModule} from "./components/master-room/master-room.module";
import {SpinnerModule} from "./shared/loading/loading.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RefDirective,
    SignUpComponent,
    FirstStepSignUpComponent,
    SecondStepSignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FontAwesomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ModalModule,
    SpinnerModule
  ],
  providers: [],
  entryComponents: [SignUpComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
