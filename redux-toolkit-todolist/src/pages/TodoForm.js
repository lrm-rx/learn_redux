import { memo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../store/modules/todoSlice";
import { getTodosAction } from "../store/modules/todoSlice";

const TodoForm = memo((props) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onSave = () => {
    handleSave(title);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSave(title);
    }
  };
  const handleSave = async (value) => {
    if (!title.trim()) {
      alert("请输入内容!");
      return;
    }
    const isSame = todos.find((item) => item.title === title);
    if (isSame) {
      alert("内容已经存在!");
      return;
    }
    await dispatch(addAction(title));
    await dispatch(getTodosAction());
    setTitle("");
  };

  return (
    <div className="add-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="请输入内容并按回车/点击添加"
      />
      <button onClick={onSave}>添加</button>
    </div>
  );
});

export default TodoForm;
