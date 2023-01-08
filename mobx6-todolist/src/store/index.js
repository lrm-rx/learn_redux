import FooterStore from './footerStore'
import MainStore from './mainStore'
class RootStore {
  constructor() {
    this.footerStore = new FooterStore(this)
    this.mainStore = new MainStore(this)
  }
}
export default RootStore