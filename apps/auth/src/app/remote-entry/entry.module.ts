import pages from '../pages';
import routes from '../routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...pages],
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class RemoteEntryModule {}
