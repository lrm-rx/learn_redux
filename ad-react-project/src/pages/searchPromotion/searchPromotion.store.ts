import axios from 'axios';
import { observable, runInAction, action, makeObservable, computed } from 'mobx'

class SearchPromotionStore {
  constructor() {
    makeObservable(this)
  }
  // @observable modalShow: boolean = false;
  @observable expiredPlanData = [];

  @observable dataTrendData = []

  async getExpiredPlanList() {
    try {
      const { data } = await axios.get('api/users')
      runInAction(() => {
        // this.modalShow = data.length > 0;
        this.expiredPlanData = data
        // console.log('data:', data)
      });
    } catch (error) {
      console.error(error)
    }
  }
  @action closeModal() {
    // this.modalShow = false
    this.expiredPlanData = []
  }
  @computed get modalShow() {
    return this.expiredPlanData.length > 0;
  }

  async getChartData() {
    try {
      const { data } = await axios.get('api/likes')
      runInAction(() => {
        this.dataTrendData = data
      })
    } catch (error) {
      console.log('error', error);
    }
  }
}
export default new SearchPromotionStore
