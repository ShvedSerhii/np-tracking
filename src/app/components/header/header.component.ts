import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { LogOut } from './../../store/actions/auth.actions';
import { CookiesService } from 'src/app/services/cookies/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private store: Store<IAppState>,
    public theme: ThemeService,
    public cookie: CookiesService
  ) {}

  public logout(): void {
    this.store.dispatch(new LogOut());
  }
}
