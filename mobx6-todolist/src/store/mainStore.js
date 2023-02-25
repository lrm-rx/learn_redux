import {
  action,
  observable,
  makeObservable,
  makeAutoObservable,
  computed,
} from "mobx";
import request from "@/api/todolist";

class MainStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    // makeObservable(this, {
    //   list: observable,
    //   getTodos: action.bound,
    //   setTodos: action.bound,
    //   delTodo: action.bound,
    //   updateTodo: action.bound,
    //   addTodo: action.bound,
    //   mainRadioStatus: computed,
    //   upatePerRadioStatus: action.bound,
    //   completed: computed,
    //   clearCompleted: action.bound,
    //   unCompleted: computed,
    //   renderList: computed
    //   updataData: action.bound,
    // })
    makeAutoObservable(this, {}, { autoBind: true });
  }
  list = [];

  // 获取所有数据
  async getTodos() {
    const { data } = await request.get("/");
    this.setTodos(data);
  }
  setTodos(data) {
    this.list = data;
  }
  // 删除数据
  async delTodo(id) {
    await request.delete(`/${id}`);
    await this.getTodos();
  }

  // 更新数据
  async updateTodo(id, key, value) {
    await request.patch(`/${id}`, { [key]: value });
    await this.getTodos();
  }

  // 添加数据
  async addTodo(name) {
    await request.post("/", { name, done: false });
    await this.getTodos();
  }

  // 全选按钮的状态
  get mainRadioStatus() {
    return this.list.every((item) => item.done);
  }

  // 更新所有按钮的状态
  async upatePerRadioStatus(done) {
    const arrPromise = this.list.map((item) => {
      return this.updateTodo(item.id, "done", done);
    });
    await Promise.all(arrPromise);
    await this.getTodos();
  }

  // 已完成的数据
  get completed() {
    return this.list.filter((item) => item.done);
  }

  // 清空已完成
  async clearCompleted() {
    // 这里有点问题
    const arrPromise = this.completed.map((item) => {
      return request.delete(`/${item.id}`);
    });
    await Promise.all(arrPromise);
    await this.getTodos();
  }
  get unCompleted() {
    return this.list.filter((item) => !item.done);
  }

  get renderList() {
    // 根据 footerStore 模块的 active 来从 this.list 中得到对应的结果
    const active = this.rootStore.footerStore.state.active;
    return active === "未勾选"
      ? this.unCompleted
      : active === "已勾选"
      ? this.completed
      : this.list;
  }
}
export default MainStore;
