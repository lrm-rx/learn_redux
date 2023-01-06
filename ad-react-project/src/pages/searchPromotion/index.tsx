import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Account from './components/Account'
import DataTrend from '@/components/DataTrend'
import WaveAnalysis from './components/WaveAnalysis'
import UserPortrait from './components/UserPortrait'
import AutoModal from './components/AutoModal';

import './style.scss'

interface IProps extends RouteComponentProps { }

class SearchPromotionPage extends PureComponent<IProps> {
  state = {
    cardData: [
      {
        id: '1',
        name: '消费（元）',
        value: 2000,
        persent: '',
        icon: 'assets/imgs/card-icon1',
        isSelected: true,
      },
      {
        id: '2',
        name: '展现（次）',
        value: 5988,
        persent: 88.9,
        icon: 'assets/imgs/card-icon2',
        isSelected: false,
      },
      {
        id: '3',
        name: '点击（次）',
        value: 199,
        persent: 12.6,
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
      },
      {
        id: '2',
        name: '展现（次）',
        value: 5988,
        persent: 88.9,
        icon: 'assets/imgs/card-icon2',
        isSelected: false,
      },
      {
        id: '3',
        name: '点击（次）',
        value: 199,
        persent: 12.6,
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
      }
    ]
  }
  handleAutoModalClick = (type: number, values?: any) => {
    // searchStore.modalShow = false;
  }
  render() {
    const { history } = this.props
    const { cardData } = this.state
    return (
      <div className="search-promotion-page-box">
        <div className="header">
          <Header history={history} />
        </div>
        <div className="content">
          <div className="account-box">
            <Account />
          </div>
          <div className="data-trend-box">
            <div className="data-trend-title">数据趋势</div>
            <DataTrend cardData={cardData} />
          </div>
          <div className="wave-analysis-box">
            <div className="title">波动分析</div>
            <WaveAnalysis />
          </div>
          <div className="user-portrait-box">
            <div className="title">用户画像</div>
            <UserPortrait />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
        <AutoModal
          visible={false}
          onBtnClick={this.handleAutoModalClick}
        />
      </div>
    )
  }
}
export default SearchPromotionPage
