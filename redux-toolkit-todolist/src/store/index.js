import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./modules/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
