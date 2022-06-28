import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import * as TodoSelectors from './todo.selectors';
import { TODO_FEATURE_KEY } from './@types/state.interface';
import { PersistService } from '../../../services/persist.service';

@Injectable()
export class TodoFacade {
  public selectedTasks$ = this.store.pipe(
    select(TodoSelectors.getSelectedTasks)
  );

  constructor(
    private readonly store: Store,
    private persistService: PersistService
  ) {}

  getState() {
    return this.persistService.getState(TODO_FEATURE_KEY);
  }

  addTask(task: string) {
    this.store.dispatch(TodoActions.addTask({ task }));
  }

  removeTask(task: string) {
    this.store.dispatch(TodoActions.removeTask({ task }));
  }
}
