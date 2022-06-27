import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import * as TodoSelectors from './todo.selectors';

@Injectable()
export class TodoFacade {
  public selectedTasks$ = this.store.pipe(
    select(TodoSelectors.getSelectedTasks)
  );

  constructor(private readonly store: Store) {}

  addTask(task: string) {
    this.store.dispatch(TodoActions.addTask({ task }));
  }

  removeTask(task: string) {
    this.store.dispatch(TodoActions.removeTask({ task }));
  }
}
