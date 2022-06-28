import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, FEATURE_KEY } from './@types/state.interface';

export const getState = createFeatureSelector<State>(FEATURE_KEY);
export const getUser = createSelector(getState, (state: State) => state.user);
export const getToken = createSelector(getState, (state: State) => state.token);
