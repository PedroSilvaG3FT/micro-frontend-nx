import { cloneDeep } from 'lodash';
import * as UserActions from './user.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { State, UserAdapter, UserEntity } from './@types/state.interface';

export const userAdapter: UserAdapter = createEntityAdapter<UserEntity>();
export const initialState: State = userAdapter.getInitialState({ list: [] });

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
