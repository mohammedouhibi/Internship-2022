import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 
    if((localStorage.getItem('token')!=null)&&(localStorage.getItem('token')!="")){
    request = request.clone( {
      headers: request.headers.set('Authorization','Bearer '+localStorage.getItem('token'))

      });
    }

    return next.handle(request);
  }
}
