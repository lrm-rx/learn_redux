import React, { memo } from 'react'

const TodoFooter = memo(() => {
  return (
    <div className="footer">
      <span className="todo-count">
        共计未办理<strong>0</strong>项
      </span>
      <ul className='filters'>
        <li>
          <a className='selected' href='#/'>
            全部
          </a>
        </li>
        <li>
          <a href='#/'>未勾选</a>
        </li>
        <li>
          <a href='#/'>已勾选</a>
        </li>
      </ul>
      <button className="clear-completed">
        清除已勾选
      </button>
    </div>
  )
})

export default TodoFooter