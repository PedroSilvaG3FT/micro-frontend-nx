import { createAction, props } from '@ngrx/store';

export const toggleSelect = createAction(
  '[User/API] Toggle Select user',
  props<any>()
);
