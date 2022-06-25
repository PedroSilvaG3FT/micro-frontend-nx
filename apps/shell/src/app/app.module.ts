import pages from './pages';
import routes from './routes';
import components from './components';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ...pages, ...components, NxWelcomeComponent],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
