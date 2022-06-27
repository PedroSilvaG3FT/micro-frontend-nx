import { EntityAdapter, EntityState } from '@ngrx/entity';

export const USER_FEATURE_KEY = 'user';

export interface UserEntity {
  name: string;
  email: string;
}

export interface State extends EntityState<UserEntity> {
  list: UserEntity[];
}

export type UserAdapter = EntityAdapter<UserEntity>;
