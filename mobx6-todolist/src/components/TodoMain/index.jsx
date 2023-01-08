// import React, { memo, useState, useEffect } from 'react'
// // import { observer } from 'mobx-react';
// import { observer } from "mobx-react-lite";
// import RootStore from '@/store'
// import TodoItem from '../TodoItem'

// const TodoMain = memo(observer((props) => {
//   const [list, setList] = useState([
//     { id: 1, name: '吃饭', done: false },
//     { id: 2, name: '睡觉', done: true },
//   ])
//   const {mainStore} = {...new RootStore()}
//   console.log("RootStore", {...new RootStore()})
//   useEffect(() => {
//     console.log('props:', mainStore.state.list)
//   }, [])

//   return (
//     <div className="main">
//       <input id="toggle-all" className="toggle-all" type="checkbox" />
//       <label htmlFor="toggle-all"></label>
//       <ul className='todo-list'>
//         {list.map((item) => (
//           <TodoItem key={item.id} item={item} />
//         ))}
//       </ul>
//     </div>
//   )
// }))

// export default TodoMain

import React, { PureComponent } from 'react'
import { observer } from 'mobx-react';
import TodoItem from '../TodoItem'

const TodoMain = observer(
  class TodoMain extends PureComponent {
    state = {
      list: [
        { id: 1, name: '吃饭', done: false },
        { id: 2, name: '睡觉', done: true }
      ]
    }

    componentDidMount() {
      console.log("props", this.props);
    }
    render() {
      const { list } = this.state
      return (
        <div className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all"></label>
          <ul className='todo-list'>
            {list.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      )
    }
  }
)

export default TodoMain
