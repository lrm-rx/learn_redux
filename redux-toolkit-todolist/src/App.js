import { useSelector } from "react-redux";
import Actions from "./pages/Actions";
import TodoForm from "./pages/TodoForm";
import TodoList from "./pages/TodoList";

const App = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="home">
      <h1 className="title">Redux Toolkit@1.9.3练习</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <Actions />
    </div>
  );
};

export default App;
