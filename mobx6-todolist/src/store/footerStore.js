import {
  action,
  observable,
  makeObservable,
  makeAutoObservable
} from 'mobx'

class FooterStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      state: observable,
      updateActive: action.bound
    })
  }
  state = {
    tabs: ['All', 'Active', 'Completed'],
    active: 'All',
  }
  updateActive(active) {
    this.state.active = active
  }
}
export default FooterStore