import { AuthInterface } from './state.interface';

export interface AuthAction {
  type?: string;
  user: AuthInterface;
}

export interface SetTokenAction {
  type?: string;
  token: string;
}
