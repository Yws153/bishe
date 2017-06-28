import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from 'app/components'
import { Layout, Input, Button, Cascader, Checkbox } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import 'antd/dist/antd.less'
import './style.less'

@connect(state => state)
export default
class Login extends React.Component {
	render() {
		const { homeState, history } = this.props

		const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

		return (
			<div>
				<Layout>
					<Header className="home-header">生鲜水果小区团购系统</Header>
					<Layout className="home-wrap">
						<Content>
							<ul className="load-wrap">
								<li className="load-wrap-li"><label>用户名：</label><Input/></li>
								<li className="load-wrap-li"><label>密码：</label><Input/></li>
								<li className="load-wrap-li"><label>地址：</label><Cascader className="load-address" options={options} placeholder="Please select" /></li>
								<li className="load-wrap-li"><label>手机号码：</label><Input/></li>
								<li className="load-wrap-li"><label><Checkbox />&nbsp;我是商家</label></li>
								<li className="load-wrap-li"><Button type="primary" className="login-button" onClick={() => history.push('/detail')}>注册</Button></li>
							</ul>	
						</Content>
					</Layout>
					
				</Layout>
			</div>
		)
	}
}