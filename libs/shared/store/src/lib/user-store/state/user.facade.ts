import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  // public loaded$ = this.store.pipe(select(UserSelectors.getUserLoaded));
  // public allUser$ = this.store.pipe(select(UserSelectors.getAllUser));
  // public selectedUser$ = this.store.pipe(select(UserSelectors.getSelected));
  public selectedUsers$ = this.store.pipe(
    select(UserSelectors.getSelectedUsers)
  );

  constructor(private readonly store: Store) {}

  hasUser(email: string) {
    return this.selectedUsers$.pipe(
      map((users) => users.some((user) => user.email === email))
    );
  }

  toggleSelectUser(user: any) {
    this.store.dispatch(UserActions.toggleSelect({ user }));
  }
}
