import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from 'app/components'
import { Layout, Input, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import * as homeAction from 'app/actions/home.action'
import 'antd/dist/antd.less'
import './style.less'

import { Link } from 'react-router-dom'

@connect(state => state)
class Home extends React.Component {
	render() {
		const { homeState, history, dispatch } = this.props	

		return (
			<div>
				<Layout>
					<Header className="home-header">生鲜水果小区团购系统</Header>
					<Layout className="home-wrap">
						<Content>
							<ul className="load-wrap">
								<li className="load-wrap-li"><label>用户名：</label><Input/></li>
								<li className="load-wrap-li"><label>密码：</label><Input/></li>
								<li className="load-wrap-li"><Button type="primary" className="load-button" onClick={() => dispatch(homeAction.increment())}>登录</Button></li>
							</ul>
							<Link className="load-wrap-text" to="/login">还没有账号？点我注册</Link>					
						</Content>
					</Layout>
					{/* <Footer>footer</Footer> */}
				</Layout>
			</div>
		)
	}
}

export default Home


// import React from 'react'
// import { connect } from 'react-redux'
// import { Layout } from 'antd'
// const { Header, Footer, Sider, Content } = Layout
// import { Input } from 'antd'
// import 'antd/dist/antd.less'
// import './style.less'
// import { Link } from 'react-router-dom'

// @connect(state => state)
// class Home extends React.Component {
// 	render() {
// 		const {
// 			homeState,
// 			history
// 		} = this.props

// 		return (
// 			<div>
// 				<Layout>
// 					<Header className="home-header">小番后台数据</Header>
// 					<Layout className="home-wrap">
// 						<Sider>

// 						</Sider>
// 						<Content>main content</Content>
// 					</Layout>
// 					{/* <Footer>footer</Footer> */}
// 				</Layout>
// 			</div>
// 		)
// 	}
// }

// export default Home
