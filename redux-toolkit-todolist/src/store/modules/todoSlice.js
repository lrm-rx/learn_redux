import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import uuid from "react-uuid";
import request from "@/api/request";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  // 同步和异步操作
  reducers: {
    // 刷新数据
    refreshData: (state, action) => {
      state.todoList = action.payload;
    },

    // 点击勾选
    markCompleted: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    // 点击去勾选
    markNotCompleted: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      todo.completed = false;
    },
    // 点击全选
    markAllCompleted: (state) => {
      state.todoList = state.todoList.map((todo) => ({
        ...todo,
        completed: true,
      }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosAction.fulfilled, (state, { payload }) => {
      state.todoList = payload.data;
      // return payload.data; // 如果initialState为空对象则可以这样做
    });
  },
});

// createAsyncThunk第一个参数?
export const getTodosAction = createAsyncThunk(
  "todos/get",
  async (_, { dispatch }) => {
    const res = await request.get("/");
    return res;
    // 直接在异步action中操作同步action, 可以调用其他的slice
    // dispatch(todoSlice.actions.refreshData(res.data));
  }
);

export const addAction = createAsyncThunk(
  "todos/add",
  async (title, { dispatch }) => {
    await request.post("/", { title, completed: false });
    dispatch(getTodosAction());
  }
);

export const delTodoAction = createAsyncThunk(
  "todos/del",
  async (id, { dispatch }) => {
    await request.delete(`/${id}`);
    dispatch(getTodosAction());
  }
);

export const deleteCompletedAction = createAsyncThunk(
  "todos/deleteCompleted",
  async (todos, { dispatch }) => {
    const arrPromise = todos
      .filter((item) => {
        return item.completed;
      })
      .map((subItem) => {
        return request.delete(`/${subItem.id}`);
      });
    await Promise.all(arrPromise);
    dispatch(getTodosAction());
  }
);

// export default todoSlice.reducer;

export const {
  refreshData,
  markCompleted,
  markNotCompleted,
  markAllCompleted,
} = todoSlice.actions;

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
