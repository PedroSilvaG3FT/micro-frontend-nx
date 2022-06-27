import { createAction, props } from '@ngrx/store';
import { TaskAction } from './@types/actions.interface';

export const addTask = createAction('addTask', props<TaskAction>());
export const removeTask = createAction('removeTask', props<TaskAction>());
