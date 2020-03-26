import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageGuard } from './guards/page.guard';
import { LogoutGuard } from './guards/logout.guard';


const routes: Routes = [
  { path: 'home', component: DocumentsListComponent, canActivate: [PageGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'registration', component: RegisterComponent, canActivate: [LogoutGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PageGuard, LogoutGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
