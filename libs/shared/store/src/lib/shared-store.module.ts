import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersistService } from '../services/persist.service';
import { StorageService } from 'libs/shared/services/_storage.service';

@NgModule({
  imports: [CommonModule],
  providers: [PersistService, StorageService],
})
export class SharedStoreModule {}
