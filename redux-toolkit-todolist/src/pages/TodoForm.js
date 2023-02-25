import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = (props) => {
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
  const handleSave = (value) => {
    if (!title.trim()) {
      alert("请输入内容!");
      return;
    }
    dispatch({
      type: "todos/add",
      payload: title,
    });
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
};

export default TodoForm;
