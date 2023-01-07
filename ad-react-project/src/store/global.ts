import {
  observable, runInAction, makeObservable, action, computed,
} from 'mobx';

class GlobalStore {
  constructor() {
    makeObservable(this);
  }
  @observable isKAAccount: boolean = true;
}

export default new GlobalStore();
