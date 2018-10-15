import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class ATAuthJWTInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getToken()
      .pipe(
        switchMap((token: NbAuthJWTToken) => {
          if (token.isValid()) {
            const JWT = `Bearer ${token.getValue()}`;
            req = req.clone({
              setHeaders: {
                Authorization: JWT,
                SubDomain:'papsico'
              },
            });
          }
          return next.handle(req);
        }),
      );
  }

  protected get authService(): NbAuthService {
    return this.injector.get(NbAuthService);
  }
}
