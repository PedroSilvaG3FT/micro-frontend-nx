import { StorageService } from 'libs/shared/services/_storage.service';

export class PersistService extends StorageService {
  constructor(private key: string) {
    super();
  }

  getInitialState<Data>(model: Data): Data {
    const state = this.getState();
    const hasState = !!Object.keys(state).length;

    if (hasState) return state;
    else return model;
  }
  getState() {
    const storage = this.get(this.key);
    if (storage) return JSON.parse(storage);
    else return {};
  }
  persist(value: any) {
    this.set(this.key, JSON.stringify(value));
    return value;
  }
}
