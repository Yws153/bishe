import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from 'app/components'
import { Layout, Input, Button, Table, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout
import 'antd/dist/antd.less'
import './style.less'
import '../Home/style.less'
import ModalConponent from './ModalConponent.jsx'

import { Link } from 'react-router-dom'

@connect(state => state)
class Detail extends React.Component {
	  
	constructor(props) {
    	super(props);
    	this.state = {visible: false};
 	 }

	render() {
		const { homeState, history } = this.props
		const { visible } = this.state

		const columns = [{
  				title: '商品名称',
  				dataIndex: 'name',
  				key: 'name',
  				// render: text => <a href="#">{text}</a>,
			}, {
  				title: '数量',
  				dataIndex: 'age',
 				key: 'age',
			}, {
  				title: '单价',
  				dataIndex: 'address',
  				key: 'address',
			}, {
  				title: '操作',
  				key: 'action',
  				render: (text, record) => (
    				<span>
      					<span onClick={() => this.setState({visible: true})}>修改</span>
      					<span className="ant-divider"></span>
      					<span onClick={() => {}}>删除</span>
   	 				</span>
  				)
			}];

		const data = [{
  				key: '1',
  				name: 'John Brown',
  				age: 32,
  				address: 'New York No. 1 Lake Park',
			}, {
  				key: '2',
  				name: 'Jim Green',
  				age: 42,
  				address: 'London No. 1 Lake Park',
			}, {
  				key: '3',
  				name: 'Joe Black',
  				age: 32,
  				address: 'Sidney No. 1 Lake Park',
			}]

		return (
			<div>
				<Layout>
					<Header className="home-header">生鲜水果小区团购系统</Header>
					<Layout className="home-wrap">
						<Content>
							<div className="btn-bar clearfix">
								<Button className="btn-bar-btn" type="primary" onClick={() => history.push('/')}>我的设置</Button>
								<Button className="btn-bar-btn" type="primary" onClick={() => this.setState({visible: true})}>新增商品</Button>
								<Button className="btn-bar-btn" type="primary" onClick={() => history.push('/tuan')}>查看团购情况</Button>
							</div>
							<ModalConponent
								visible={visible}
								handleOk={() => this.setState({visible: false})}
								handleCancel={() => this.setState({visible: false})}
							></ModalConponent>
							<Table columns={columns} dataSource={data} />				
						</Content>
					</Layout>
					{/* <Footer>footer</Footer> */}
				</Layout>
			</div>
		)
	}
}

export default Detail