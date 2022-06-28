import { EntityAdapter, EntityState } from '@ngrx/entity';
import { UserStoreInterface } from './user-store.interface';

export const USER_FEATURE_KEY = 'user';

export interface UserStateInterface {
  list: UserStoreInterface[];
}
export interface State extends EntityState<UserStoreInterface> {
  list: UserStoreInterface[];
}

export type UserAdapter = EntityAdapter<UserStoreInterface>;
