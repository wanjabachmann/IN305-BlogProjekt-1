import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';

export const loginInGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);

  if (loginService.getIsAuthenticated()) {
    console.log('Route Guard: true');
    return true;
  } else {
    console.log('Route Guard: false');
    loginService.login();
    return false;
  }
};
