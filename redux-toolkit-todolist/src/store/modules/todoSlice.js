import { createSlice } from "@reduxjs/toolkit";
// import uuid from "react-uuid";

const initialState = [
  {
    id: 1,
    title: "吃饭",
    completed: true,
  },
  {
    id: 2,
    title: "睡觉",
    completed: false,
  },
  {
    id: 3,
    title: "打代码",
    completed: true,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  // 同步和异步操作
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        title: action.payload,
        completed: false,
      };
      // 要使用push
      // state = [...state, newTodo];
      state.unshift(newTodo);
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // 点击勾选
    markCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    // 点击去勾选
    markNotCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = false;
    },
    // 点击全选
    markAllCompleted: (state) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    // 删除选中项
    deleteCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

// export default todoSlice.reducer;

// 现版本不适用
// export const {
//   add,
//   remove,
//   markCompleted,
//   markNotCompleted,
//   markAllCompleted,
//   deleteCompleted,
// } = todoSlice.reducer;

export const todoReducer = todoSlice.reducer;

// 在react中, 不能通过以下方式进行导出
// module.exports = {
//   todoReducer: todoSlice.reducer,
//   add: add,
//   remove: remove,
//   markCompleted: markCompleted,
//   markNotCompleted: markNotCompleted,
//   markAllCompleted: markAllCompleted,
//   deleteCompleted: deleteCompleted,
// };
