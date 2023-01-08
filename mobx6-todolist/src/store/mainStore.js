import {
  action,
  observable,
  makeObservable,
  computed
} from 'mobx'
import request from '@/api/request'


class MainStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      state: observable,
      getTodos: action.bound,
      setTodos: action.bound,
      delTodo: action.bound,
      updateTodo: action.bound,
      addTodo: action.bound,
      mainRadioStatus: computed,
      upatePerRadioStatus: action.bound,
      completed: computed,
      clearCompleted: action.bound,
      unCompleted: computed,
      renderList: computed
    })
  }
  state = {
    list: [
      { id: 1, name: '吃饭', done: false },
      { id: 2, name: '睡觉', done: true },
    ],
  }

  // 获取所有数据
  async getTodos() {
    const { data } = await request.get('/')
    this.setTodos(data)
  }
  setTodos(data) {
    this.state.list = data
  }
  // 删除数据
  async delTodo(id) {
    await request.delete(`/${id}`)
    await this.getTodos()
  }

  // 更新数据
  async updateTodo(id, key, value) {
    await request.patch(`/${id}`, { [key]: value })
    await this.getTodos()
  }

  // 添加数据
  async addTodo(name) {
    await request.post('/', { name, done: false })
    await this.getTodos()
  }

  // 全选按钮的状态
  get mainRadioStatus() {
    return this.state.list.every((item) => item.done)
  }

  // 更新所有按钮的状态
  async upatePerRadioStatus(done) {
    const arrPromise = this.state.list.map((item) => {
      return this.updateTodo(item.id, 'done', done)
    })
    await Promise.all(arrPromise)
    await this.getTodos()
  }

  // 已完成的数据
  get completed() {
    return this.state.list.filter((item) => item.done)
  }

  // 清空已完成
  async clearCompleted() {
    const arrPromise = this.completed.map((item) => {
      return request.delete(`/${item.id}`)
    })
    await Promise.all(arrPromise)
    await this.getTodos()
  }
  get unCompleted() {
    return this.state.list.filter((item) => !item.done)
  }

  get renderList() {
    // 根据 footerStore 模块的 active 来从 this.state.list 中得到对应的结果
    const active = this.rootStore.footerStore.state.active
    return active === 'Active' ? this.unCompleted : active === 'Completed' ? this.completed : this.state.list
  }
}
export default MainStore
