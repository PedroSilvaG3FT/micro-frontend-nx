import { Injectable } from '@angular/core';
import { StorageService } from 'libs/shared/services/_storage.service';

@Injectable({ providedIn: 'root' })
export class PersistService {
  private storageService: StorageService = new StorageService();

  constructor() {}

  getInitialState<Data>(key: string, model: Data): Data {
    const state = this.getState(key);
    const hasState = !!Object.keys(state).length;

    if (hasState) return state;
    else return model;
  }
  getState(key: string) {
    const storage = this.storageService.get(key);
    if (storage) return JSON.parse(storage);
    else return {};
  }
  persist(key: string, value: any) {
    this.storageService.set(key, JSON.stringify(value));
    return value;
  }
}
