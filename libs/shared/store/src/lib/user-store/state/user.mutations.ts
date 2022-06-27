import { cloneDeep } from 'lodash';
import { State } from './@types/state.interface';
import { AddUserAction } from './@types/actions.interface';

export const userMutations = {
  ADD_USER: (state: State, { user }: AddUserAction) => {
    const currentState: State = cloneDeep(state);
    const hasUser = currentState.list.some(({ email }) => email === user.email);

    if (hasUser) return currentState;
    currentState.list.push(user);

    return currentState;
  },
  REMOVE_USER: (state: State, { user }: AddUserAction) => {
    const currentState: State = cloneDeep(state);
    const newList = currentState.list.filter(
      ({ email }) => email !== user.email
    );

    currentState.list = newList;
    return currentState;
  },
};
