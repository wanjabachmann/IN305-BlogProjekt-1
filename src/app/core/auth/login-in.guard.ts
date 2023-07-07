import { CanActivateFn } from '@angular/router';

export const loginInGuard: CanActivateFn = (route, state) => {
  return true;
};
