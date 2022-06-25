import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserActions from './user.actions';
import { UserEntity } from './user.models';

export const USER_FEATURE_KEY = 'user';

export interface State extends EntityState<UserEntity> {
  selectedId?: string | number; // which User record has been selected
  loaded: boolean; // has the User list been loaded
  error?: string | null; // last known error (if any)
  selectedUsers: Map<any, any>;
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: State;
}

export const userAdapter: EntityAdapter<UserEntity> =
  createEntityAdapter<UserEntity>();

export const initialState: State = userAdapter.getInitialState({
  // set initial required properties
  selectedUsers: new Map(),
  loaded: false,
});

const userReducer = createReducer(
  initialState,
  on(UserActions.toggleSelect, (state, { user }) => {
    console.log(user);
    const newState: any = { ...state };
    if (newState.selectedUsers.has(user.email)) {
      newState.selectedUsers.delete(user.email);
    } else {
      newState.selectedUsers.set(user.email, user);
    }
    return newState;
  }),
  on(UserActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(UserActions.loadUserSuccess, (state, { user }) =>
    userAdapter.setAll(user, { ...state, loaded: true })
  ),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
