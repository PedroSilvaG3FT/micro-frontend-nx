import pages from './pages';
import routes from './routes';
import components from './components';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  UserFacade,
  TodoFacade,
  UserStoreModule,
  TodoStoreModule,
} from '@nx-micro-app/shared/store';

@NgModule({
  declarations: [AppComponent, ...pages, ...components, NxWelcomeComponent],
  imports: [
    TodoStoreModule,
    UserStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    RouterModule.forRoot(
      [
        ...routes,
        {
          path: 'todo',
          loadChildren: () =>
            import('todo/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'user',
          loadChildren: () =>
            import('user/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [UserFacade, TodoFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
