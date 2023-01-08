import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import RootStore from './store'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider {...new RootStore()}>
    <App />
  </Provider>
)
