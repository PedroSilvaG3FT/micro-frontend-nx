import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as from from './state/auth.reducer';
import { CommonModule } from '@angular/common';
import { AuthFacade } from './state/auth.facade';
import { FEATURE_KEY } from './state/@types/state.interface';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(FEATURE_KEY, from.reducer)],
  providers: [AuthFacade],
})
export class AuthStoreModule {}
