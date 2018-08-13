import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpInterceptorService } from './http-interceptor.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  private httpInterceptorService: HttpInterceptorService;

  constructor(private injector: Injector) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.httpInterceptorService = this.injector.get(HttpInterceptorService);


    /**什么也不做，只是简单的转发请求而不做任何修改*/
    const dupReq = req.clone();
    // Change the URL and replace 'http://' with 'https://'
    const secureReq = req.clone({ url: req.url.replace('http://', 'https://') });
    // return next.handle(req);

    const login_type = window.sessionStorage.getItem('is_have_token');
    if (login_type === 'token') {
      const token = window.sessionStorage.getItem('management_access_token');
      return next.handle(req.clone({
        headers: req.headers.set('Authorization', `bearer ${token}`)
      }));
    } else {
      return next.handle(req);
    }
  }

}
