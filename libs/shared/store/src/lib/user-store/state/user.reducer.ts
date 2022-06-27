import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserActions from './user.actions';
import { UserEntity } from './user.models';
import { cloneDeep } from 'lodash';

export const USER_FEATURE_KEY = 'user';

export interface State extends EntityState<UserEntity> {
  loaded: boolean;
  list: UserEntity[];
  error?: string | null;
  selectedId?: string | number;
  selectedUsers: any | Map<any, any>;
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: State;
}

export const userAdapter: EntityAdapter<UserEntity> =
  createEntityAdapter<UserEntity>();

export const initialState: State = userAdapter.getInitialState({
  selectedUsers: new Map(),
  loaded: false,
  list: [],
});

const mutations = {
  TOGGLE_SELECT: (state: State, { user }: any) => {
    const currentState: State = cloneDeep(state);
    const hasUser = currentState.list.some(({ email }) => email === user.email);

    if (hasUser) return currentState;

    currentState.list.push(user);
    return currentState;
  },
};

const userReducer = createReducer(
  initialState,
  on(UserActions.toggleSelect, mutations.TOGGLE_SELECT)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
