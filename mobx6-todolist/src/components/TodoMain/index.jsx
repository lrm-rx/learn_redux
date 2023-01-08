import React, { memo, useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import RootStore from '@/store'
import TodoItem from '../TodoItem'

const TodoMain = memo(inject('mainStore')(observer((props) => {
  useEffect(() => {
    props.mainStore.getTodos()
  }, [])
  const { renderList, mainRadioStatus, upatePerRadioStatus } = props.mainStore
  return (
    <div className="main">
      <input id="toggle-all" className="toggle-all"
        type="checkbox" checked={mainRadioStatus}
        onChange={() => upatePerRadioStatus(!mainRadioStatus)} />
      <label htmlFor="toggle-all"></label>
      <ul className='todo-list'>
        {renderList.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
})))

export default TodoMain
