import React, { memo, useState } from "react";
import { inject, observer } from "mobx-react";

const TodoHeader = memo(
  inject("mainStore")(
    observer((props) => {
      const [name, setName] = useState("");

      const handleKeyUp = (e) => {
        if (e.key === "Enter") {
          if (name.trim() === "") {
            return alert("不能为空");
          }
          const { addTodo } = props.mainStore;
          addTodo(name);
          setName("");
        }
      };
      return (
        <div>
          <h1>React Hook + mbox6</h1>
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
    })
  )
);

export default TodoHeader;
