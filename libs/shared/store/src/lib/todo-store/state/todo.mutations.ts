import { cloneDeep } from 'lodash';
import { State } from './@types/state.interface';
import { TaskAction } from './@types/actions.interface';

export const taskMutations = {
  ADD_TASK: (state: State, { task }: TaskAction) => {
    const currentState: State = cloneDeep(state);
    const hasUser = currentState.list.some((item) => item === task);

    if (hasUser) return currentState;
    currentState.list.push(task);

    return currentState;
  },
  REMOVE_TASK: (state: State, { task }: TaskAction) => {
    const currentState: State = cloneDeep(state);
    const newList = currentState.list.filter((item) => item !== task);

    currentState.list = newList;
    return currentState;
  },
};
