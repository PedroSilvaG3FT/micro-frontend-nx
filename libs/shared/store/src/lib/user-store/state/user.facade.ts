import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserSelectors from './user.selectors';
import { USER_FEATURE_KEY } from './@types/state.interface';
import { UserStoreInterface } from './@types/user-store.interface';
import { PersistService } from '../../../services/persist.service';

@Injectable()
export class UserFacade {
  public selectedUsers$ = this.store.pipe(
    select(UserSelectors.getSelectedUsers)
  );

  private persistService: PersistService = new PersistService(USER_FEATURE_KEY);

  constructor(private readonly store: Store) {}

  getState() {
    console.log('TESSSET');
    return this.persistService.getState();
  }

  addUser(user: UserStoreInterface) {
    this.store.dispatch(UserActions.addUser({ user }));
  }

  removeUser(user: UserStoreInterface) {
    this.store.dispatch(UserActions.removeUser({ user }));
  }
}
