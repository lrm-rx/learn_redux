import React, { memo } from "react";
import { Provider } from "react-redux";
import TodoHeader from "@/components/TodoHeader";
import TodoFooter from "@/components/TodoFooter";
import TodoMain from "@/components/TodoMain";
import store from "./store";
import "./styles/index.css";

const App = memo(() => {
  return (
    <Provider store={store}>
      <p style={{ color: "deeppink" }}>注: 双击内容可进行编辑.(react hook)</p>
      <div className="todo-app">
        <TodoHeader />
        <TodoMain />
        <TodoFooter />
      </div>
    </Provider>
  );
});

export default App;
