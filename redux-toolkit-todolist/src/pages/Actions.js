import { memo } from "react";
import { useDispatch } from "react-redux";

const Actions = memo((props) => {
  const dispatch = useDispatch();
  return (
    <div className="actions">
      <button onClick={() => dispatch({ type: "todos/markAllCompleted" })}>
        全选
      </button>
      <button onClick={() => dispatch({ type: "todos/deleteCompleted" })}>
        删除已选项
      </button>
    </div>
  );
});

export default Actions;
