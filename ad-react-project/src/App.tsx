import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './style.scss'

interface Props extends RouteComponentProps { }

class App extends PureComponent<Props> {
  handleRoute = () => {
    const { location: { pathname }, history } = this.props

    // 重定向lacation
    if (pathname === '/') {
      history.push('index')
      return false
    }
    return true
  }

  render() {
    const { children } = this.props
    return (
      <>
        {
          this.handleRoute() ? children : 'other'
        }
      </>
    )
  }
}

export default App
