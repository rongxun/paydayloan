import React from 'react';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.min.css';
import  Me from './assets/person.svg';
import  Med from './assets/personS.svg';
import  Money from './assets/money.svg';
import  Moneyed from './assets/moneyS.svg';
import Banner from './rxBanner';
import News from './rxNews';
import Form from './rxForm';
import  Ppl from './assets/ppl.svg';
import  Ppled from './assets/pplS.svg';
import Network from './rxNetwork'

import 'whatwg-fetch';

fetch('/api/hello').then(res => console.log(res.text()));

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'blueTab',
        badge: 3,
        hidden: false,
        dot: true,
      };
    }
  
    handleScroll = (e) => {
      this.setState({badge: 0,});
    }

    renderContent(pageText) {
      return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
          <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
            onClick={(e) => {
              e.preventDefault();
              this.setState({
                hidden: !this.state.hidden,
              });
            }}
          >
            点击切换 tab-bar 显示/隐藏
          </a>
        </div>
      );
    }
  
    render() {
      return (
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="新闻"
            key="新闻"
            icon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: `url(${Money}) center center /  0.42rem 0.42rem no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: `url(${Moneyed}) center center /  0.42rem 0.42rem no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={this.state.badge}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
                badge: 0,
              });
            }}
            data-seed="logId"
          >
            <Banner/>
            <News handleScroll = {this.handleScroll}/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: Me }}
            selectedIcon={{ uri: Med }}
            title="申请"
            key="申请"
            dot={this.state.dot}
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
                dot: false
              });
            }}
          >
           <Form/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: Ppl }}
            selectedIcon={{ uri: Ppled }}
            title="分销"
            key="分销"
            selected={this.state.selectedTab === 'PplTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'PplTab'
              });
            }}
          >
            <Network/>
          </TabBar.Item>
        </TabBar>
      );
    }
  }

  export default App;