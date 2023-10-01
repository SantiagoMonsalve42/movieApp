import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key = environment.apiKey;
    const language = environment.lenguage;
    let request = req;
    if (req.method === 'GET') {
      request = req.clone({
        setParams: {
          api_key,
          language
        }
      });
    }
    return next.handle(request);
  }
}
