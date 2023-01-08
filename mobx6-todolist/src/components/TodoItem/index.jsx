import classNames from 'classnames'
import React, { memo } from 'react'

const TodoItem = memo((props) => {

  const { item } = props
  return (
    <li>
      <div className="view">
        <div>
          <input className="toggle" type="checkbox" checked={item.done} />
          <label>{item.name}</label>
        </div>
        <button className="destroy"></button>
      </div>

    </li>
  )
})

export default TodoItem