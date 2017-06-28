import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from 'app/components'
import { Layout, Input, Button, Card } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import 'antd/dist/antd.less'
import './style.less'

import { Link } from 'react-router-dom'

@connect(state => state)
export default
class Tuan extends React.Component {
	render() {
		const { homeState, history } = this.props

		return (
			<div>
				<Layout>
					<Header className="home-header">生鲜水果小区团购系统</Header>
					<Layout className="home-wrap">
						<Content>
							<div className="btn-bar clearfix">
								<Button className="btn-bar-btn" type="primary" onClick={() => history.push('/')}>我的设置</Button>
								<Button className="btn-bar-btn" type="primary" onClick={() => history.push('/detail')}>商品列表</Button>
							</div>
							<div className="clearfix tuan-layer">
								<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>		
							  	<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>	
							  	<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>	
							  	<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>	
							  	<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>			
							  	<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>	
							  	<Card className="tuan-card" title="Card title" extra={<a href="#">More</a>} style={{ width: 300, height: 200 }}>
								    <p>Card content</p>
								    <p>Card content</p>
								    <p>Card content</p>
							  	</Card>	
							</div>

						</Content>
					</Layout>
					{/* <Footer>footer</Footer> */}
				</Layout>
			</div>
		)
	}
}
