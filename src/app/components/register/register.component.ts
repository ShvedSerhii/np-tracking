import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { errMessage, isAuthenticated } from 'src/app/store/selectors/auth.selectors';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { User } from '../../models/user.model';
import RegisterForm from './register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public model: User;
  public form: RegisterForm;
  public loading: boolean;
  public showError = false;
  public errMessage$: Observable<string>;
  public isAuthenticated$: Observable<boolean>;
  constructor(
    private store: Store<IAppState>,
    private loaderService: LoaderService
  ) {
    this.model = new User();
    this.form = new RegisterForm(this.model);
    this.errMessage$ = store.select(errMessage);
    this.isAuthenticated$ = store.select(isAuthenticated);
    this.loaderService.isLoading.subscribe(value => {
      this.loading = value;
    });
  }

  public registration(form): void {
    this.showError = true;
    this.store.dispatch(new SignUp(form.value));
  }
}
