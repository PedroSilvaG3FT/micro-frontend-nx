import { createAction, props } from '@ngrx/store';
import { AuthInterface } from './@types/state.interface';

export const setUser = createAction(
  'setUser',
  props<{ user: AuthInterface }>()
);

export const setToken = createAction('setToken', props<{ token: string }>());
export const clear = createAction('clearAuth', props<any>());
