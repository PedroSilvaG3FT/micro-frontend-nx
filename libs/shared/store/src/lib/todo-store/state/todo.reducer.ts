import { cloneDeep } from 'lodash';
import * as TaskActions from './todo.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { State, UserAdapter } from './@types/state.interface';
import { taskMutations } from './todo.mutations';

export const userAdapter: UserAdapter = createEntityAdapter<String>();

export const initialState: State = userAdapter.getInitialState({ list: [] });

const userReducer = createReducer(
  initialState,
  on(TaskActions.addTask, taskMutations.ADD_TASK),
  on(TaskActions.removeTask, taskMutations.REMOVE_TASK)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
