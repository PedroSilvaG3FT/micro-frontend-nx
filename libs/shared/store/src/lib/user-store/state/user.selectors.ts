import { USER_FEATURE_KEY, State } from './user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUserState = createFeatureSelector<State>(USER_FEATURE_KEY);

export const getSelectedUsers = createSelector(
  getUserState,
  (state: State) => state.list
);
