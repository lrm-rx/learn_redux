import React, { memo, useState, useEffect } from "react";
import classNames from "classnames";

const TodoFooter = memo((props) => {
  const [status, setStatus] = useState("全部");
  const [tabs, setTabs] = useState(["全部", "未勾选", "已勾选"]);
  const [active, setActive] = useState("全部");

  // useEffect(() => {
  //   updateActive(status);
  // }, [status]);

  return (
    <div className="footer">
      <span className="todo-count">
        共计未办理<strong>{6}</strong>项
      </span>
      <ul className="filters">
        {tabs.map((item) => (
          <li key={item} onClick={() => setStatus(item)}>
            <a
              className={classNames({
                selected: item === active,
              })}
              href="#/"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {tabs.length > 0 && (
        <button className="clear-completed">清除已勾选</button>
      )}
    </div>
  );
});

export default TodoFooter;
