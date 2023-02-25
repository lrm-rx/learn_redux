import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompletedAction,
  getTodosAction,
} from "../store/modules/todoSlice";

const Actions = memo((props) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteCompleted = async () => {
    await dispatch(deleteCompletedAction(todos));
    await dispatch(getTodosAction());
  };

  return (
    <div className="actions">
      <button onClick={() => dispatch({ type: "todos/markAllCompleted" })}>
        全选
      </button>
      <button onClick={deleteCompleted}>删除已选项</button>
    </div>
  );
});

export default Actions;
