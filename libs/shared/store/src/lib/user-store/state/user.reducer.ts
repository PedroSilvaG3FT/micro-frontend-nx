import { cloneDeep } from 'lodash';
import * as UserActions from './user.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { State, UserAdapter } from './@types/state.interface';
import { UserStoreInterface } from './@types/user-store.interface';
import { userMutations } from './user.mutations';

export const userAdapter: UserAdapter =
  createEntityAdapter<UserStoreInterface>();

export const initialState: State = userAdapter.getInitialState({ list: [] });

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, userMutations.ADD_USER),
  on(UserActions.removeUser, userMutations.REMOVE_USER)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
