import { cloneDeep } from 'lodash';
import { FEATURE_KEY, State } from './@types/state.interface';
import { PersistService } from '../../../services/persist.service';
import { AuthAction, SetTokenAction } from './@types/actions.interface';

const persistService = new PersistService(FEATURE_KEY);

export const mutations = {
  SET_USER: (state: State, { user }: AuthAction) => {
    const currentState: State = cloneDeep(state);
    currentState.user = user;

    return persistService.persist(currentState);
  },
  SET_TOKEN: (state: State, { token }: SetTokenAction) => {
    const currentState: State = cloneDeep(state);
    currentState.token = token;

    return persistService.persist(currentState);
  },
  CLEAR: (state: State) => {
    let currentState: State = cloneDeep(state);
    currentState = { user: {}, token: '' } as State;

    return persistService.persist(currentState);
  },
};
