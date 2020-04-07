import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { CookieService } from 'ngx-cookie-service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { NewDocumentComponent } from './components/documents-list/new-document/new-document.component';
import { DocumentComponent } from './components/documents-list/document/document.component';
import { AuthService } from './services/auth/auth.service';
import { LoaderService } from './services/loader/loader.service';
import { DocumentService } from './services/document/document.service';
import { CookiesService } from './services/cookies/cookies.service';
import { AuthEffects } from './store/effects/auth.effects';
import { appReducers } from './store/reducers/app.reducers';
import { DocumentsEffects } from './store/effects/documents.effects';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DocumentsListComponent,
    DocumentComponent,
    NewDocumentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot([AuthEffects, DocumentsEffects]),
  ],
  providers: [
    CookieService,
    CookiesService,
    AuthService,
    LoaderService,
    DocumentService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [NewDocumentComponent]
})
export class AppModule {}
