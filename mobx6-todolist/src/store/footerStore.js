import {
  action,
  observable,
  makeObservable,
  makeAutoObservable
} from 'mobx'

class FooterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    // makeObservable(this, {
    //   state: observable,
    //   updateActive: action.bound
    // })
    makeAutoObservable(this, {}, { autoBind: true });
  }
  state = {
    tabs: ['全部', '未勾选', '已勾选'],
    active: '全部',
  }
  updateActive(active) {
    this.state.active = active
  }
}
export default FooterStore