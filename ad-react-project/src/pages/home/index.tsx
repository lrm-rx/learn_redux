import { Button } from 'antd'
import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="login-text">这是一段文字</div>
        <Button type="primary">主要按钮</Button>
      </div>
    )
  }
}

export default Home
