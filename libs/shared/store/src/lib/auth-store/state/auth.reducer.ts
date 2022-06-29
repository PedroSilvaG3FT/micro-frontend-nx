import * as actions from './auth.actions';
import { mutations } from './auth.mutations';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PersistService } from '../../../services/persist.service';
import {
  State,
  AuthAdapter,
  FEATURE_KEY,
  AuthInterface,
  AuthStateInterface,
} from './@types/state.interface';

const persistService = new PersistService(FEATURE_KEY);
const initialStateDTO = persistService.getInitialState<AuthStateInterface>({
  user: {} as AuthInterface,
  token: '',
});

export const authAdapter: AuthAdapter = createEntityAdapter<AuthInterface>();
export const initialState: State = authAdapter.getInitialState(initialStateDTO);

const userReducer = createReducer(
  initialState,
  on(actions.clear, mutations.CLEAR),
  on(actions.setUser, mutations.SET_USER),
  on(actions.setToken, mutations.SET_TOKEN)
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
