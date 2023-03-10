import React, { PureComponent } from 'react'
import { Button } from 'antd'
import { ThemeContext, ThemeType } from '@/context/theme'
import './style.scss'

interface IProps { }
interface IStates {
  status: number;
  balance: number;
  creditValue: number;
}
class Account extends PureComponent<IProps, IStates> {
  static contextType = ThemeContext
  state = {
    status: 0, // 0表示账户金未到, 1 表示已到
    balance: 100,
    creditValue: 0
  }
  render() {
    const { status, balance, creditValue } = this.state;
    return (
      <div className="account-component-box">
        <div>
          你好，JackeyLove
        </div>
        <div className="examine">
          {
            status === 0 ? (
              <div className="status">开户金未到</div>
            ) : (
              <div className="status-ok">开户金已到</div>
            )
          }
        </div>
        <div className="balance">
          <div>
            <div className="text">推广余额</div>
            <div className="value">{balance}</div>
          </div>
          <Button type={this.context.buttonType} size="small">充值</Button>
        </div>
        <div className="credit">
          <div>
            <div className="text">合规信用值</div>
            <div className="value">{creditValue}</div>
          </div>
          <div className="detail-text">详情</div>
        </div>
      </div>
    );
  }
}

// Account.contextType = ThemeContext

export default Account
