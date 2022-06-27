import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { UserFacade } from './state/user.facade';
import * as fromUser from './state/user.reducer';
import { USER_FEATURE_KEY } from './state/@types/state.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(USER_FEATURE_KEY, fromUser.reducer),
  ],
  providers: [UserFacade],
})
export class UserStoreModule {}
