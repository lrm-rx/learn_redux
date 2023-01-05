import React, { PureComponent } from 'react'
import { cloneDeep } from 'lodash';
import CardTabs from './components/CardTabs'
import LineChart from './components/LineChart'
import { CardItemType } from './components/CardTabs/types';
import './style.scss'

interface IProps {
  cardData?: any;
}

interface IStates { }

class DataTrend extends PureComponent<IProps, IStates> {
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
    ]
  }
  handleCardTabsChange = (selectedId: string) => {
    const { cardData } = this.state;
    const newCardData = cardData.map((cardItem: CardItemType) => {
      const tempCardItem = cloneDeep(cardItem);
      if (tempCardItem.id === selectedId) {
        tempCardItem.isSelected = true;
      } else {
        tempCardItem.isSelected = false;
      }
      return tempCardItem;
    });
    this.setState({
      cardData: newCardData
    });
  }
  render() {
    const { cardData } = this.state
    return (
      <div className="data-trend-component-box">
        <CardTabs
          cardData={cardData}
          onChange={(selectedId: string) => this.handleCardTabsChange(selectedId)}
        />
        <div className="line-chart-box">
          <LineChart />
        </div>
      </div>
    )
  }
}

export default DataTrend
