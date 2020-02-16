import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackingListComponent } from './components/tracking-list/tracking-list.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { TrackDocumentComponent } from './components/tracking-list/track-document/track-document.component';
import { AddTrackDocumentComponent } from './components/tracking-list/add-track-document/add-track-document.component';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackingListComponent,
    LoginComponent,
    HeaderComponent,
    TrackDocumentComponent,
    AddTrackDocumentComponent,
    RegistrationComponent,
    TrackingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
