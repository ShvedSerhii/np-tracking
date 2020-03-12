import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import LoginForm from './login.form';
import { Router } from '@angular/router';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: User;
  public form: LoginForm;
  public startSpinner = false;
  constructor(private store: Store<IAppState>, private router: Router) {
    this.model = new User();
    this.form = new LoginForm(this.model);
  }

  public onSubmit(form): void {
    this.startSpinner = true;
    this.store.dispatch(new LogIn(form.value));
  }
}