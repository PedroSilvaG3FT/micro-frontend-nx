import { cloneDeep } from 'lodash';
import { AddUserAction } from './@types/actions.interface';
import { State, USER_FEATURE_KEY } from './@types/state.interface';
import { PersistService } from '../../../services/persist.service';

const persistService = new PersistService(USER_FEATURE_KEY);

export const userMutations = {
  ADD_USER: (state: State, { user }: AddUserAction) => {
    const currentState: State = cloneDeep(state);
    const hasUser = currentState.list.some(({ email }) => email === user.email);
    if (hasUser) return currentState;
    currentState.list.push(user);

    return persistService.persist(currentState);
  },
  REMOVE_USER: (state: State, { user }: AddUserAction) => {
    const currentState: State = cloneDeep(state);
    const newList = currentState.list.filter(
      ({ email }) => email !== user.email
    );

    currentState.list = newList;
    return persistService.persist(currentState);
  },
};
