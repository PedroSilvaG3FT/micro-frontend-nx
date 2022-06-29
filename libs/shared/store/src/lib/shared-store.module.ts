import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from 'libs/shared/services/_storage.service';

@NgModule({
  imports: [CommonModule],
  providers: [StorageService],
})
export class SharedStoreModule {}
