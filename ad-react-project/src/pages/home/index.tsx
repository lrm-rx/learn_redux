import { Button } from 'antd'
import axios from 'axios'
import React, { PureComponent } from 'react'
import './style.scss'

class Home extends PureComponent {
  componentDidMount() {
    axios.get('api/users').then((res) => {
      console.log(res)
    }).catch((error) => {
      console.error(error);
    })
  }
  render() {
    return (
      <div className="index-page">
        <div className="head-box"></div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">chart</div>
            <div className="promotion-card-area">promotion card</div>
            <div className="product-area">product card</div>
          </div>
          <div className="right-content">
            <div className="account-area">account</div>
            <div className="index-banner-area">index banner</div>
            <div className="product-news-area">product news</div>
          </div>
        </div>
        <div className="foot-box"></div>
      </div>
    )
  }
}

export default Home
