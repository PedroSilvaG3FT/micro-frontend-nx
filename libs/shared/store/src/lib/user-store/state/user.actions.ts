import { createAction, props } from '@ngrx/store';
import { UserEntity } from './user.models';

export const toggleSelect = createAction(
  '[User/API] Toggle Select user',
  props<any>()
);
