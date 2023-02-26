import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import TodoItem from "../TodoItem";
import { getTodoListAction } from "../../store/actionCreators";

const TodoMain = memo((props) => {
  const { todoList } = useSelector(
    (state) => ({
      todoList: state.getIn(["todos", "todoList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoListAction());
  }, [dispatch]);
  const TodoItemRender = (todoList) => {
    todoList.map((item) => <TodoItem key={item.id} item={item} />);
  };
  return (
    <div className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        // checked={mainRadioStatus}
        // onChange={() => upatePerRadioStatus(!mainRadioStatus)}
      />
      <label htmlFor="toggle-all"></label>
      {!todoList.length && <div className="no-data">暂无数据!</div>}
      <ul className="todo-list">
        {todoList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
});

export default TodoMain;
