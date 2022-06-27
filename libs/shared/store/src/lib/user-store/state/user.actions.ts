import { createAction, props } from '@ngrx/store';
import { UserStoreInterface } from './@types/user-store.interface';

export const addUser = createAction(
  'addUser',
  props<{ user: UserStoreInterface }>()
);

export const removeUser = createAction(
  'removeUser',
  props<{ user: UserStoreInterface }>()
);
