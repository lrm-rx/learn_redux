import React, { PureComponent } from 'react'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Home from 'pages/home'
import Login from 'pages/login'
import App from '../App'

const allRoutes = [
  {
    path: '/index',
    exact: false,
    component: Home,
    title: ''
  },
  {
    path: '/login',
    exact: false,
    component: Login,
    title: ''
  }
]

const AppWarp = withRouter(App)

class AppRoute extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <AppWarp>
            {
              renderRoutes(allRoutes.map(item => ({ ...item, key: item.path })))
            }
          </AppWarp>
        </Router>
      </div>
    )
  }
}

export default AppRoute