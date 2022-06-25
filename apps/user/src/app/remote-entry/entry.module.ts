import pages from '../pages';
import routes from '../routes';
import components from '../components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class RemoteEntryModule {}
