import React, { memo } from 'react'
import TodoHeader from '@/components/TodoHeader'
import TodoFooter from '@/components/TodoFooter'
import TodoMain from '@/components/TodoMain'

const App = memo(() => {
  return (
    <div className="todo-app">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </div>
  )
})

export default App