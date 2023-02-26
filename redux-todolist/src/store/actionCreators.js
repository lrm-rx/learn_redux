import * as actionTypes from "./constants";

import request from "@/api/request";

// 获取数据
const changeTodoListAction = (res) => ({
  type: actionTypes.TODOLIST,
  todoList: res,
});

export const getTodoListAction = () => {
  return async (dispatch) => {
    const { data } = await request.get("/");
    dispatch(changeTodoListAction(data));
  };
};

// 添加数据
export const getTodoAddtAction = (name) => {
  return async (dispatch) => {
    await request.post("/", { name, done: false });
    dispatch(getTodoListAction());
  };
};

// 更新数据
export const getTodoUpdatetAction = (id, key, value) => {
  return async (dispatch) => {
    await request.patch(`/${id}`, { [key]: value });
    dispatch(getTodoListAction());
  };
};

// 删除数据
export const getTodoDeltAction = (id) => {
  return async (dispatch) => {
    await request.delete(`/${id}`);
    dispatch(getTodoListAction());
  };
};
