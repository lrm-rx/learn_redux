import * as actionTypes from "./constants";

import request from "@/api/request";

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
