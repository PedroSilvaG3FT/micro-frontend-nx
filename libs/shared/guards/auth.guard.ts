import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor() {}
  private isAuthenticated: boolean = false;

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('TESTE');
    return this.isAuthenticated;
  }
}
