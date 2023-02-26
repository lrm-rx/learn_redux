import React, { memo, useState } from "react";
import { getTodoAddtAction } from "../../store/actionCreators";
import { useDispatch } from "react-redux";

const TodoHeader = memo((props) => {
  const pispatch = useDispatch();
  const [name, setName] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      if (name.trim() === "") {
        return alert("不能为空");
      }
      pispatch(getTodoAddtAction(name));
      setName("");
    }
  };
  return (
    <div>
      <h1>Hook + redux</h1>
      <input
        className="new-todo"
        placeholder="请输入并按回车添加内容"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
});

export default TodoHeader;
