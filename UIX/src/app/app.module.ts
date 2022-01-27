import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./core/material/material.module";
import {MatDialogModule} from '@angular/material/dialog';
import { RefDirective } from "./core/directives/ref.directive";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RefDirective,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  providers: [],
  entryComponents: [AuthenticationComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
