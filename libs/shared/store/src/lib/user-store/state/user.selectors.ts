import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, USER_FEATURE_KEY } from './@types/state.interface';

export const getUserState = createFeatureSelector<State>(USER_FEATURE_KEY);

export const getSelectedUsers = createSelector(
  getUserState,
  (state: State) => state.list
);
