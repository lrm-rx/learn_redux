import React, { memo, useState } from 'react'

const TodoHeader = memo(() => {
  const [name, setName] = useState('')
  return (
    <>
      <h1>todos</h1>
      <input className="new-todo" placeholder="请输入" />
    </>
  )
})

export default TodoHeader