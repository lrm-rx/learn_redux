import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Actions from "./pages/Actions";
import TodoForm from "./pages/TodoForm";
import TodoList from "./pages/TodoList";
import { getTodosAction } from "./store/modules/todoSlice";

const App = memo(() => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);
  useEffect(() => {
    dispatch(getTodosAction());
    return () => {};
  }, [dispatch]);

  return (
    <div className="home">
      <h1 className="title">Redux Toolkit@1.9.3练习</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <Actions />
    </div>
  );
});

export default App;
