import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as actions from './auth.actions';
import * as selectors from './auth.selectors';
import { PersistService } from '../../../services/persist.service';
import { AuthInterface, FEATURE_KEY } from './@types/state.interface';

@Injectable()
export class AuthFacade {
  public getUser$ = this.store.pipe(select(selectors.getUser));
  public getToken$ = this.store.pipe(select(selectors.getToken));
  private persistService: PersistService = new PersistService(FEATURE_KEY);

  constructor(private readonly store: Store) {}

  getState() {
    return this.persistService.getState();
  }

  setUser(user: AuthInterface) {
    this.store.dispatch(actions.setUser({ user }));
  }
  setToken(token: string) {
    this.store.dispatch(actions.setToken({ token }));
  }
  clear() {
    this.store.dispatch(actions.clear(null));
  }
}
