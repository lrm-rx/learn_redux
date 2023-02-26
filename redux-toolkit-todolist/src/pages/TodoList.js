import { memo } from "react";
import { BiCircle, BiCheckCircle } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import {
  delTodoAction,
  getTodosAction,
  markCompleted,
  markNotCompleted,
} from "../store/modules/todoSlice";

const TodoList = memo((props) => {
  const dispatch = useDispatch();

  const toggleCompleted = (id, completed) => {
    // completed
    //   ? dispatch({
    //       type: "todos/markNotCompleted",
    //       payload: id,
    //     })
    //   : dispatch({
    //       type: "todos/markCompleted",
    //       payload: id,
    //     });
    completed ? dispatch(markNotCompleted(id)) : dispatch(markCompleted(id));
  };

  const onDeleteTodo = async (e, id) => {
    e.stopPropagation();
    // dispatch({
    //   type: "todos/remove",
    //   payload: id,
    // });
    await dispatch(delTodoAction(id));
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
});

export default TodoList;
