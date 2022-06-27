import { UserStoreInterface } from './user-store.interface';

export interface AddUserAction {
  type: string;
  user: UserStoreInterface;
}
