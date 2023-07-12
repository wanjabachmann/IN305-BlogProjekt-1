import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subject } from 'rxjs';

export type UserState = {
  isAuthenticated: boolean;
  userData: AuthUserData | null;
};

export type AuthUserData = {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  preferred_username: string;
  sub: string;
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  username = '';
  private usernameSubject = new Subject<string>();

  private userState: UserState = {
    isAuthenticated: false,
    userData: null,
  };

  constructor(public oidcSecurityService: OidcSecurityService) {}

  login() {
    console.log('login');
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log('logout ' + result));
  }

  updateAuth() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        this.userState.isAuthenticated = isAuthenticated;
        this.userState.userData = userData;
        this.username = this.getUserData()?.preferred_username || '';
        this.usernameSubject.next(this.username);
      });
  }

  getIsAuthenticated(): boolean {
    return this.userState.isAuthenticated;
  }

  getUserData(): AuthUserData | null {
    return this.userState.userData;
  }

  getUsername(): string {
    return this.username;
  }

  getUsernameObservable() {
    return this.usernameSubject.asObservable();
  }
}
