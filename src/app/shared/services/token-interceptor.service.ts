import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';



const APPID = 'a87e0724873bf5fdca861f524f990cd2e1fd433b';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let request = req;

    request = req.clone({
      setHeaders: {
        Authorization: `${ APPID } OAUTH-TOKEN`
      }
    });

    return next.handle(request);
  }
}
