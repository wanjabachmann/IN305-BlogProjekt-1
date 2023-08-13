import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, map } from 'rxjs';
import { hasRole } from './jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private oidcSecurityService: OidcSecurityService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.oidcSecurityService.checkAuth().pipe(
      map((loginResponse) => {
        if (
          loginResponse.isAuthenticated &&
          hasRole('user', loginResponse.accessToken)
        ) {
          console.log('User is authenticated & has user role');
          return true;
        } else {
          console.log('User is unauthorized');
          this.oidcSecurityService.authorize();
          return false;
        }
      })
    );
  }
}
