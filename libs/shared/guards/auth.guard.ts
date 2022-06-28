import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router) {}
  private isAuthenticated: boolean = false;

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth']);
    }

    return this.isAuthenticated;
  }
}
