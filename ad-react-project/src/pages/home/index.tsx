import { Button } from 'antd'
import axios from 'axios'
import React, { PureComponent } from 'react'
import './style.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Account from './components/Account'
import Chart from './components/DataTrend'
import IndexBanner from './components/IndexBanner'
import ProductCard from './components/ProductCard'
import ProductNews from './components/ProductNews'
import PromotionCard from './components/PromotionCard'

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
        <div className="head-box">
          <Header />
        </div>
        <div className="content-box">
          <div className="left-content">
            <div className="chart-area">
              <Chart />
            </div>
            <div className="promotion-card-area">
              <PromotionCard />
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
      </div>
    )
  }
}

export default Home
