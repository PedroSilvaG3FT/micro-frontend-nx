import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthFacade } from '../store/src';
import { Router, CanActivateChild } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router, private authFacade: AuthFacade) {}

  get isAuthenticated(): boolean {
    const state = this.authFacade.getState();
    return !!state.token;
  }
  canActivateChild(): Observable<boolean> | boolean {
    if (!this.isAuthenticated) this.router.navigate(['/auth']);
    return this.isAuthenticated;
  }
}
