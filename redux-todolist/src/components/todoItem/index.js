import React, { memo, useState, useRef } from "react";
import classNames from "classnames";

const TodoItem = memo((props) => {
  const { item } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [currentName, setCurrentName] = useState("");

  const inputRef = useRef();
  const handleDBlClick = async () => {
    await setIsEditing(!isEditing);
    await setCurrentName(item.name);
    inputRef.current.focus();
  };
  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      setIsEditing(false);
      setCurrentName("");
      return;
    }
    if (e.key === "Enter") {
      if (currentName.trim() === "") return alert("写点啥吧~");
      // props.mainStore.updateTodo(props.item.id, "name", currentName);
      setIsEditing(false);
      setCurrentName("");
    }
  };

  return (
    <li
      className={classNames({
        completed: item.done,
        editing: isEditing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={() => {}}
        />
        <label onDoubleClick={handleDBlClick}>{item.name}</label>
        <button
          className="destroy"
          onClick={() => props.mainStore.delTodo(item.id)}
        ></button>
      </div>
      <input
        className="edit"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        ref={inputRef}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
      />
    </li>
  );
});

export default TodoItem;
