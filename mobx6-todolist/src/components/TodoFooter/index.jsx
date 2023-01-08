import React, { memo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

const TodoFooter = memo(inject('mainStore', 'footerStore')(observer((props) => {
  const {
    mainStore: { clearCompleted, completed, unCompleted },
    footerStore: {
      state: { tabs, active },
      updateActive,
    }
  } = props
  const [status, setStatus] = useState('全部')

  useEffect(() => {
    updateActive(status)
  }, [status])


  return (
    <div className="footer">
      <span className="todo-count">
        共计未办理<strong>{unCompleted.length}</strong>项
      </span>
      <ul className="filters">
        {tabs.map((item) => (
          <li key={item} onClick={() => setStatus(item)}>
            <a
              className={classNames({
                selected: active === item,
              })}
              href="#/"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      {completed.length > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          清除已勾选
        </button>
      )}
    </div>
  )
})))

export default TodoFooter