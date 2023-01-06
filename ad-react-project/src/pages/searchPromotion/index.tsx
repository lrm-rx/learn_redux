import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import './style.scss'

interface IProps extends RouteComponentProps {}

class SearchPromotionPage extends PureComponent<IProps> {
  render() {
    return (
      <div className="search-promotion-page-box">
        <div className="header"></div>
        <div className="content">
          
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
export default SearchPromotionPage
