import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./core/material/material.module";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RefDirective } from "./core/directives/ref.directive";
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstStepAuthComponent } from './core/authentication/first-step-auth/first-step-auth.component';
import { SecondStepAuthComponent } from './core/authentication/second-step-auth/second-step-auth.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RefDirective,
    AuthenticationComponent,
    FirstStepAuthComponent,
    SecondStepAuthComponent,
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
    MatIconModule
  ],
  providers: [],
  entryComponents: [AuthenticationComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
