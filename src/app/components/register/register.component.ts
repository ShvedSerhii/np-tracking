import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import RegisterForm from './register.form';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public model: User;
  public form: RegisterForm;
  public startSpinner = false;
  constructor(private router: Router, private store: Store<IAppState>) {
    this.model = new User();
    this.form = new RegisterForm(this.model);
  }

  public onSubmit(form): void {
    this.startSpinner = true;
    this.store.dispatch(new SignUp(form.value));
  }
}