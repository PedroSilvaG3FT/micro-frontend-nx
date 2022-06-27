import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { TodoFacade } from './state/todo.facade';
import * as fromUser from './state/todo.reducer';
import { TODO_FEATURE_KEY } from './state/@types/state.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, fromUser.reducer),
  ],
  providers: [TodoFacade],
})
export class TodoStoreModule {}
