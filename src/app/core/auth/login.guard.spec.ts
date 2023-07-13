import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginGuard } from './login-in.guard';
import { LoginService } from '../login.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { of } from 'rxjs';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let loginService: jasmine.SpyObj<LoginService>;
  let oidcSecurityService: jasmine.SpyObj<OidcSecurityService>;

  beforeEach(() => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', [
      'getIsAuthenticated',
    ]);
    const oidcSecurityServiceSpy = jasmine.createSpyObj('OidcSecurityService', [
      'checkAuth',
    ]);

    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: OidcSecurityService, useValue: oidcSecurityServiceSpy },
      ],
    });

    guard = TestBed.inject(LoginGuard);
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    oidcSecurityService = TestBed.inject(
      OidcSecurityService
    ) as jasmine.SpyObj<OidcSecurityService>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation if user is authenticated and has role "user"', () => {
    loginService.getIsAuthenticated.and.returnValue(true);
    oidcSecurityService.checkAuth.and.returnValue(
      of({ isAuthenticated: true, accessToken: 'some-token' })
    );

    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    guard
      .canActivate(routeSnapshot, routerStateSnapshot)
      .subscribe((result) => {
        expect(result).toBeTrue();
      });

    expect(loginService.getIsAuthenticated).toHaveBeenCalled();
    expect(oidcSecurityService.checkAuth).toHaveBeenCalled();
  });

  it('should redirect to authorization if user is not authenticated or does not have role "user"', () => {
    loginService.getIsAuthenticated.and.returnValue(false);
    oidcSecurityService.checkAuth.and.returnValue(
      of({ isAuthenticated: false, accessToken: 'some-token' })
    );

    const routeSnapshot = {} as ActivatedRouteSnapshot;
    const routerStateSnapshot = {} as RouterStateSnapshot;

    guard
      .canActivate(routeSnapshot, routerStateSnapshot)
      .subscribe((result) => {
        expect(result).toBeFalse();
      });

    expect(loginService.getIsAuthenticated).toHaveBeenCalled();
    expect(oidcSecurityService.checkAuth).toHaveBeenCalled();
  });
});
