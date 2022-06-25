import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  public loaded$ = this.store.pipe(select(UserSelectors.getUserLoaded));
  public allUser$ = this.store.pipe(select(UserSelectors.getAllUser));
  public selectedUser$ = this.store.pipe(select(UserSelectors.getSelected));
  public selectedUsers$ = this.store.pipe(
    select(UserSelectors.getSelectedUsers)
  );

  constructor(private readonly store: Store) {}

  isCatSelected(email: any) {
    return this.selectedUsers$.pipe(
      map((selectedusers) => selectedusers.has(email))
    );
  }

  toggleSelectUser(user: any) {
    this.store.dispatch(UserActions.toggleSelect({ user }));
  }

  init() {
    this.store.dispatch(UserActions.init());
  }
}
