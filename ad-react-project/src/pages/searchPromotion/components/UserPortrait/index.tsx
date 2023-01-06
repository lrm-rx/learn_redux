import React, { PureComponent } from 'react'
import { Empty } from 'antd';

interface IProps { }

class UserPortrait extends PureComponent<IProps> {
  state = {
    isEmpty: true,
  }
  render() {
    const { isEmpty } = this.state;
    return (
      <>
        {
          isEmpty ? (
            <Empty
              description="您的广告展现积累用户较少，无法得出准确用户画像"
            />
          ) : (
            <div>用户画像信息</div>
          )
        }
      </>
    );
  }
}
export default UserPortrait
