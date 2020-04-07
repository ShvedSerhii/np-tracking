import { Injectable } from '@angular/core';
import { CookiesService } from '../cookies/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private cookie: CookiesService) {
    if (cookie.getCookie('theme')) {
      document.querySelector('html').className = 'light-theme';
    }
  }

  public setLightTheme(): void {
    this.cookie.setCookie('theme', 'light-theme');
    document.querySelector('html').className = 'light-theme';
  }

  public setDarkTheme(): void {
    this.cookie.deleteCookie('theme');
    document.querySelector('html').className = '';
  }
}
