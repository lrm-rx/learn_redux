import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import uuid from "react-uuid";
import request from "@/api/request";

// createAsyncThunk第一个参数?
export const getTodosAction = createAsyncThunk("todos/get", async () => {
  const { data } = await request.get("/");
  return data;
});

export const addAction = createAsyncThunk("todos/add", async (title) => {
  await request.post("/", { title, completed: false });
});

export const delTodoAction = createAsyncThunk("todos/del", async (id) => {
  await request.delete(`/${id}`);
});

export const deleteCompletedAction = createAsyncThunk(
  "todos/deleteCompleted",
  async (todos) => {
    const arrPromise = todos
      .filter((item) => {
        return item.completed;
      })
      .map((subItem) => {
        return request.delete(`/${subItem.id}`);
      });
    await Promise.all(arrPromise);
  }
);

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  // 同步和异步操作
  reducers: {
    // add: (state, action) => {
    //   const newTodo = {
    //     id: state.length + 1,
    //     title: action.payload,
    //     completed: false,
    //   };
    //   // 要使用push
    //   // state = [...state, newTodo];
    //   state.unshift(newTodo);
    // },
    // remove: (state, action) => {
    //   return state.filter((todo) => todo.id !== action.payload);
    // },
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
    // deleteCompleted: (state) => {
    //   return state.filter((todo) => !todo.completed);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAction.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addAction.fulfilled, (state, action) => {
        return state;
      })
      .addCase(delTodoAction.fulfilled, (state, action) => {
        return state;
      })
      .addCase(deleteCompletedAction.fulfilled, (state, action) => {
        return state;
      });
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
