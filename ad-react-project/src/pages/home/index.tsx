import axios from 'axios'
import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Select, Button, DatePicker } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Account from './components/Account'
import DataTrend from '@/components/DataTrend'
import IndexBanner from './components/IndexBanner'
import ProductCard from './components/ProductCard'
import ProductNews from './components/ProductNews'
import PromotionCard from './components/PromotionCard'
import { ThemeContext, ThemeType } from '@/context/theme'
import './style.scss'

const { Option } = Select;

interface Props extends RouteComponentProps { }
interface States {
  theme: ThemeType
}

class Home extends PureComponent<Props, States> {
  state = {
    theme: {
      buttonType: 'primary'
    },
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
        id: '3',
        name: '点击（次）',
        value: 199,
        persent: 12.6,
        icon: 'assets/imgs/card-icon3',
        isSelected: false,
      }
    ]
  }
  componentDidMount() {
    // axios.get('api/users').then((res) => {
    //   console.log(res)
    // }).catch((error) => {
    //   console.error(error);
    // })
  }

  hanleContextChange = () => {
    const { theme } = this.state;
    const newButtonType = theme.buttonType === 'primary' ? 'defalut' : 'primary';
    this.setState({
      theme: {
        buttonType: newButtonType,
      },
    });
  }

  render() {
    const { history } = this.props
    const { cardData, theme } = this.state
    return (
      <ThemeContext.Provider value={theme}>
        <div className="index-page">
          <div className="head-box">
            <Header history={history} />
          </div>
          <div className="content-box">
            <div className="left-content">
              <div className="chart-area">
                <div className="header-box">
                  <div className="title">数据趋势</div>
                  <div className="select-area">
                    <Select
                      defaultValue="0"
                      style={{ width: 120 }}
                      // onChange={this.handlePromotionChange}
                      size="small"
                    >
                      <Option value="0">全部推广产品</Option>
                      <Option value="1">搜索推广</Option>
                      <Option value="2">一站式推广</Option>
                      <Option value="3">合约推广</Option>
                      <Option value="4">知识营销</Option>
                    </Select>
                    <DatePicker
                      // onChange={this.handalDateChange}
                      size="small"
                      style={{ marginLeft: 10 }}
                      placeholder="请选择日期"
                    />
                  </div>
                </div>
                <DataTrend cardData={cardData} />
              </div>
              <div className="promotion-card-area">
                <PromotionCard history={history} />
              </div>
              <div className="product-area">
                <ProductCard />
              </div>
            </div>
            <div className="right-content">
              <div className="account-area">
                <Account />
              </div>
              <div className="index-banner-area">
                <IndexBanner />
              </div>
              <div className="product-news-area">
                <ProductNews />
              </div>
            </div>
          </div>
          <div className="foot-box">
            <Footer />
          </div>
          <div className="setting-btn">
            <SettingOutlined
              style={{ fontSize: 36, color: '#326fff' }}
              onClick={this.hanleContextChange}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default Home
