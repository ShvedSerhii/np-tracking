import { LogOut } from "./../../store/actions/auth.actions";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";
import { AuthService } from "src/app/services/auth/auth.service";
import { ThemeService } from "src/app/services/theme/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(
    private store: Store<IAppState>,
    public auth: AuthService,
    public theme: ThemeService
  ) {}

  logout() {
    this.store.dispatch(new LogOut());
  }
}
