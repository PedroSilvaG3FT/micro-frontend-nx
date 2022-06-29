import { cloneDeep } from 'lodash';
import { TaskAction } from './@types/actions.interface';
import { State, TODO_FEATURE_KEY } from './@types/state.interface';
import { PersistService } from '../../../services/persist.service';

const persistService = new PersistService(TODO_FEATURE_KEY);

export const taskMutations = {
  ADD_TASK: (state: State, { task }: TaskAction) => {
    const currentState: State = cloneDeep(state);
    currentState.list.push(task);
    return persistService.persist(currentState);
  },
  REMOVE_TASK: (state: State, { task }: TaskAction) => {
    const currentState: State = cloneDeep(state);
    const newList = currentState.list.filter((item) => item !== task);

    currentState.list = newList;
    return persistService.persist(currentState);
  },
};
