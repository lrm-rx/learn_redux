import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompletedAction,
  markAllCompleted,
} from "../store/modules/todoSlice";

const Actions = memo((props) => {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  const deleteCompleted = async () => {
    const isDone = todos.find((item) => item.completed);
    if (!isDone) {
      return alert("请选择需要删除的内容!");
    }
    await dispatch(deleteCompletedAction(todos));
  };

  return (
    <div className="actions">
      {/* <button onClick={() => dispatch({ type: "todos/markAllCompleted" })}>
        全选
      </button> */}
      <button onClick={() => dispatch(markAllCompleted())}>全选</button>
      <button onClick={deleteCompleted}>删除已选项</button>
    </div>
  );
});

export default Actions;
