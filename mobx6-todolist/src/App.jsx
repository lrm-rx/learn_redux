import React, { memo } from "react";
import TodoHeader from "@/components/TodoHeader";
import TodoFooter from "@/components/TodoFooter";
import TodoMain from "@/components/TodoMain";

const App = memo(() => {
  return (
    <>
      <p style={{ color: "deeppink" }}>注: 双击内容可进行编辑.(react hook)</p>
      <div className="todo-app">
        <TodoHeader />
        <TodoMain />
        <TodoFooter />
      </div>
    </>
  );
});

export default App;
