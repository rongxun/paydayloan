import React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}

const data = {
    openid:"ok9l9wfmHbu_VMJN1YJqW1jv77dw",
    level1:["ok9l9wRAQs7hTqDkLcVRG7VS1By4","ok9l9wfnTJxDYlI2mN4oiPsXvzqA"],
    level2:["ok9l9wcqtBzr8tYEIafm5w0Jx0fU","ok9l9wa6ZniU2OjhwD5hbBuJ1i-8"],
    level3:["ok9l9wUwYvK_4aiEWJ2GUMY_6S5w"]
}

const usrs = {
    ok9l9wfmHbu_VMJN1YJqW1jv77dw: {
        nickname:"刘阳",
        headimgurl:"http://wx.qlogo.cn/mmopen/Ecf7JkJtU2Ytgpsh8JLb3yPv4lDZuY2P2ByL3OjHQuUwobfuveSg7R8na4eFVBoIWjpTibxkMAicJrBIT5YKkPjsI3SlrD3gjj/0",
        showqrcode:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFs7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyY3VNYVV0anBkWjExY19kZjFxY28AAgQ-QOhZAwQAjScA",
        addtime: new Date(),
        },
    ok9l9wRAQs7hTqDkLcVRG7VS1By4: {
        nickname:"刘阳",
        headimgurl:"http://wx.qlogo.cn/mmopen/Ecf7JkJtU2Ytgpsh8JLb3yPv4lDZuY2P2ByL3OjHQuUwobfuveSg7R8na4eFVBoIWjpTibxkMAicJrBIT5YKkPjsI3SlrD3gjj/0",
        showqrcode:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFs7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyY3VNYVV0anBkWjExY19kZjFxY28AAgQ-QOhZAwQAjScA",
        addtime: new Date(),
    },
    ok9l9wfnTJxDYlI2mN4oiPsXvzqA: {
        nickname:"刘阳",
        headimgurl:"http://wx.qlogo.cn/mmopen/Ecf7JkJtU2Ytgpsh8JLb3yPv4lDZuY2P2ByL3OjHQuUwobfuveSg7R8na4eFVBoIWjpTibxkMAicJrBIT5YKkPjsI3SlrD3gjj/0",
        showqrcode:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFs7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyY3VNYVV0anBkWjExY19kZjFxY28AAgQ-QOhZAwQAjScA",
        addtime: new Date(),
    },
    ok9l9wcqtBzr8tYEIafm5w0Jx0fU: {
        nickname:"刘阳",
        headimgurl:"http://wx.qlogo.cn/mmopen/Ecf7JkJtU2Ytgpsh8JLb3yPv4lDZuY2P2ByL3OjHQuUwobfuveSg7R8na4eFVBoIWjpTibxkMAicJrBIT5YKkPjsI3SlrD3gjj/0",
        showqrcode:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFs7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyY3VNYVV0anBkWjExY19kZjFxY28AAgQ-QOhZAwQAjScA",
        addtime: new Date(),
    },
    "ok9l9wa6ZniU2OjhwD5hbBuJ1i-8": {
        nickname:"刘阳",
        headimgurl:"http://wx.qlogo.cn/mmopen/Ecf7JkJtU2Ytgpsh8JLb3yPv4lDZuY2P2ByL3OjHQuUwobfuveSg7R8na4eFVBoIWjpTibxkMAicJrBIT5YKkPjsI3SlrD3gjj/0",
        showqrcode:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFs7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyY3VNYVV0anBkWjExY19kZjFxY28AAgQ-QOhZAwQAjScA",
        addtime: new Date(),
    },
    ok9l9wUwYvK_4aiEWJ2GUMY_6S5w: {
        nickname:"刘阳",
        headimgurl:"http://wx.qlogo.cn/mmopen/Ecf7JkJtU2Ytgpsh8JLb3yPv4lDZuY2P2ByL3OjHQuUwobfuveSg7R8na4eFVBoIWjpTibxkMAicJrBIT5YKkPjsI3SlrD3gjj/0",
        showqrcode:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFs7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyY3VNYVV0anBkWjExY19kZjFxY28AAgQ-QOhZAwQAjScA",
        addtime: new Date(),
    },
}

const Fxs = (props) => {
    const items = props.items.map((n) => 
    <Item key={n} thumb={usrs[n].headimgurl}>
        {usrs[n].nickname}<Brief>加入时间：{usrs[n].addtime.toLocaleString()}</Brief>
    </Item>
);
    return (    
    <List>
        {items}
    </List>
    );
}


const rxNetwork = () => (
  <div>
    <Tabs defaultActiveKey="1" animatedonChange={callback} onTabClick={handleTabClick}>
    <TabPane tab="我的二维码" key="1">
        <div style={{ textAlign: "center", overflow: "hidden", display: 'block', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', maxHeight: '100%'}}>
            <WhiteSpace/>
            <img style={{ margin: "auto", height: "75px", width: "75px" }} alt="头像" src={usrs[data.openid].headimgurl} />
            <h1>速来贷</h1>
            <p>推广二维码</p>
            <img style={{ margin: "auto", height: "200px", width: "200px" }} alt="二维码" src={usrs[data.openid].showqrcode} />
        </div>
      </TabPane>
      <TabPane tab={<Badge text={`${data.level1 ? data.level1.length: 0}`}>一级分销</Badge>} key="2">
        <Fxs items={data.level1}/>
      </TabPane>
      <TabPane tab={<Badge text={`${data.level2 ? data.level2.length: 0}`}>二级分销</Badge>} key="3">
        <Fxs items={data.level2}/>
      </TabPane>
      <TabPane tab={<Badge text={`${data.level3 ? data.level3.length: 0}`}>三级分销</Badge>} key="4">
        <Fxs items={data.level3}/>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default rxNetwork;