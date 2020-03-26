import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  constructor(private cookieService: CookieService) {}

  public setCookie(
    key: string,
    value: string,
    expires: number | Date = 365,
    secure: any = true
  ): void {
    this.cookieService.set(key, value, expires, secure);
  }

  public getCookie(key: string): string {
    return this.cookieService.get(key);
  }

  public deleteCookie(key: string): void {
    this.cookieService.delete(key);
  }

  public isAuthorization(): boolean {
    return this.getCookie('token') ? true : false;
  }
}
