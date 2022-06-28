import { EntityAdapter, EntityState } from '@ngrx/entity';

export const FEATURE_KEY = 'auth';

export interface AuthStateInterface {
  user: AuthInterface;
  token: string;
}

export interface State extends EntityState<AuthInterface> {
  user: AuthInterface;
  token: string;
}

export type AuthAdapter = EntityAdapter<AuthInterface>;

export interface AuthInterface {
  email: String;
  password: String;
}
