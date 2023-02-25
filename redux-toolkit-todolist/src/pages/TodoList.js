import { BiCircle, BiCheckCircle } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import classNames from "classnames";
import { useDispatch } from "react-redux";

const TodoList = (props) => {
  const dispatch = useDispatch();

  const toggleCompleted = (id, completed) => {
    completed
      ? dispatch(
          dispatch({
            type: "todos/markNotCompleted",
            payload: id,
          })
        )
      : dispatch({
          type: "todos/markCompleted",
          payload: id,
        });
  };

  const onDeleteTodo = (e, id) => {
    e.stopPropagation();
    dispatch({
      type: "todos/remove",
      payload: id,
    });
  };

  const itemClassNames = (completed) =>
    classNames("item", {
      completed: completed,
    });
  if (!props?.todos.length) {
    return <p style={{ textAlign: "center" }}>暂无数据!</p>;
  }

  return (
    <ul className="list">
      {props?.todos.map((item) => {
        const { id, title, completed } = item;
        return (
          <li
            key={id}
            className={itemClassNames(completed)}
            onClick={() => toggleCompleted(id, completed)}
          >
            {completed ? (
              <BiCheckCircle size="24" color="skyblue" />
            ) : (
              <BiCircle size="24" color="skyblue" />
            )}

            <span>{title}</span>
            <AiOutlineDelete
              onClick={(e) => onDeleteTodo(e, id)}
              size="18"
              color="red"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
