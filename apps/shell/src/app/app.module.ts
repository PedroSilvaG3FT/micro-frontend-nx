import pages from './pages';
import routes from './routes';
import components from './components';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AuthFacade,
  UserFacade,
  TodoFacade,
  AuthStoreModule,
  UserStoreModule,
  TodoStoreModule,
} from '@nx-micro-app/shared/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'libs/shared/guards/auth.guard';

export const imports = [
  BrowserModule,
  TodoStoreModule,
  UserStoreModule,
  AuthStoreModule,
  StoreModule.forRoot({}),
  EffectsModule.forRoot([]),
];
export const providers = [UserFacade, TodoFacade, AuthFacade];
export const declarations = [AppComponent, ...pages, ...components];
@NgModule({
  providers,
  declarations,
  imports: [
    ...imports,
    RouterModule.forRoot(
      [
        ...routes,
        {
          path: 'todo',
          canActivateChild: [AuthGuard],
          loadChildren: () =>
            import('todo/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'user',
          canActivateChild: [AuthGuard],
          loadChildren: () =>
            import('user/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('auth/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
