import * as TaskActions from './todo.actions';
import { taskMutations } from './todo.mutations';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PersistService } from '../../../services/persist.service';
import {
  State,
  UserAdapter,
  TODO_FEATURE_KEY,
  TodoStateInterface,
} from './@types/state.interface';

const persistService = new PersistService(TODO_FEATURE_KEY);
const initialStateDTO = persistService.getInitialState<TodoStateInterface>({
  list: [],
});

export const userAdapter: UserAdapter = createEntityAdapter<String>();
export const initialState: State = userAdapter.getInitialState(initialStateDTO);

const userReducer = createReducer(
  initialState,
  on(TaskActions.addTask, taskMutations.ADD_TASK),
  on(TaskActions.removeTask, taskMutations.REMOVE_TASK)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
