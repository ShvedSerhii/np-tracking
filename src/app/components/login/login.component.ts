import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { errMessage, isAuthenticated } from 'src/app/store/selectors/auth.selectors';
import { LoaderService } from 'src/app/services/loader/loader.service';
import LoginForm from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: User;
  public form: LoginForm;
  public loading: boolean;
  public errMessage$: Observable<string>;
  public isAuthenticated$: Observable<boolean>;
  public showError = false;
  constructor(
    private store: Store<IAppState>,
    private loaderService: LoaderService
  ) {
    this.model = new User();
    this.form = new LoginForm(this.model);
    this.errMessage$ = store.select(errMessage);
    this.isAuthenticated$ = store.select(isAuthenticated);
    this.loaderService.isLoading.subscribe(value => {
      this.loading = value;
    });
  }

  public login(form): void {
    this.showError = true;
    this.store.dispatch(new LogIn(form.value));
  }
}
