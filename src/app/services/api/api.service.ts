import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GetOptions,
  PostOptions,
  PutOptions,
  DeleteOptions
} from './interfaces/api.interfaces';

// api service
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  public post<TRequestBody, TResponseBody>(options: PostOptions<TRequestBody, TResponseBody>): any {
    return this.httpClient
      .post<TResponseBody>(options.url, options.body)
      .subscribe(options.handlers.success, options.handlers.error);
  }

  public get<TResponseBody>(options: GetOptions<TResponseBody>): any {
    return this.httpClient
      .get<TResponseBody>(options.url, {params: options.parameters})
      .subscribe(options.handlers.success, options.handlers.error);
  }

  public put<TRequestBody, TResponseBody>(options: PutOptions<TRequestBody, TResponseBody>): any {
    return this.httpClient
      .put<TResponseBody>(options.url, options.body)
      .subscribe(options.handlers.success, options.handlers.error);
  }

  public delete<TResponseBody>(options: DeleteOptions<TResponseBody>): any {
    return this.httpClient
      .delete<TResponseBody>(options.url, {params: options.parameters})
      .subscribe(options.handlers.success, options.handlers.error);
  }
}