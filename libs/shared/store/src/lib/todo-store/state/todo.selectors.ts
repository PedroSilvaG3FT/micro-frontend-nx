import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, TODO_FEATURE_KEY } from './@types/state.interface';

export const getState = createFeatureSelector<State>(TODO_FEATURE_KEY);

export const getSelectedTasks = createSelector(
  getState,
  (state: State) => state.list
);
