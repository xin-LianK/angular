import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HttpInterceptorService } from './http-interceptor.service';

@Injectable()
/**什么也不做，只是简单的转发请求而不做任何修改*/
export class AuthInterceptorService implements HttpInterceptor {
  // private httpInterceptorService: HttpInterceptorService;
  constructor(private injector: Injector) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 替换Url
    const dupReq = req.clone();
    // Change the URL and replace 'http://' with 'https://'
    const secureReq = req.clone({ url: req.url.replace('http://', 'https://') });

    // const authReq = req.clone({ setHeaders: { Authorization: authHeader } });
    return next.handle(req);
  }

}
