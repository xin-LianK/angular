import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const url = window.location.href;
    return this.checkLogin(url);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivateChild(route, state);
  }
  checkLogin(url: string): boolean {
    if (window.sessionStorage.getItem('is_have_token')) {
      return true;
    }
    this.router.navigateByUrl('/account/login');
    return false;
  }
}
