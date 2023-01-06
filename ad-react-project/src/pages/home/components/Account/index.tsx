import React, { PureComponent } from 'react'
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import './style.scss'

interface IProps {}
interface IStates {
  status: number;
  banlance: number;
}
class Account extends PureComponent<IProps, IStates> {
  state = {
    status: 0, // 0表示账户金未到, 1 表示已到
    banlance: 100,
    creditValue: 0
  }
  render() {
    const { status, banlance } = this.state
    return (
      <div className="search-promotion-account-component-box">
        <h3 className="name">账户-JackeyLove</h3>
        <div className="info">
          <div className="info-item">
            <span className="title-text">客户权益</span>
            <span>
              <StarFilled />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </span>
          </div>
          <div className="info-item">
            <span className="title-text">状态</span>
            <span className="circle"> </span>
            <span className="value-text">
              {status === 1 ? '开户金已到' : '开户金未到'}
            </span>
          </div>
          <div className="info-item">
            <span className="title-text">推广余额</span>
            <span className="value-text">{banlance}</span>
            <Button size="small">充值</Button>
          </div>
          <div className="info-item">
            <span className="title-text">预算</span>
            <span className="value-text">不限定预算</span>
          </div>
          <div className="info-item">
            <span className="title-text">地域</span>
            <span className="value-text">不限定地域</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Account
