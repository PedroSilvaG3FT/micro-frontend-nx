import { EntityAdapter, EntityState } from '@ngrx/entity';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoStateInterface {
  list: String[];
}
export interface State extends EntityState<String> {
  list: String[];
}

export type UserAdapter = EntityAdapter<String>;
