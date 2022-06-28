import * as UserActions from './user.actions';
import { userMutations } from './user.mutations';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { UserStoreInterface } from './@types/user-store.interface';
import { PersistService } from '../../../services/persist.service';
import {
  State,
  UserAdapter,
  USER_FEATURE_KEY,
  UserStateInterface,
} from './@types/state.interface';

const persistService = new PersistService();
const initialStateDTO = persistService.getInitialState<UserStateInterface>(
  USER_FEATURE_KEY,
  { list: [] }
);

export const userAdapter: UserAdapter =
  createEntityAdapter<UserStoreInterface>();
export const initialState: State = userAdapter.getInitialState(initialStateDTO);

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, userMutations.ADD_USER),
  on(UserActions.removeUser, userMutations.REMOVE_USER)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
