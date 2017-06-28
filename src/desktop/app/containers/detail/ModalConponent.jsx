import React from 'react'
import { Modal, Input } from 'antd'

export default
class ModalConponent extends React.Component {
	 
	render() {
		const { visible, handleOk, handleCancel } = this.props

		return (
			<Modal 
				title="新增商品"
				visible={visible}
          		onOk={handleOk} 
          		onCancel={handleCancel}
        		>
          		<ul className="shangpin">
          			<li className="clearfix">
          				<label className="shangpin-lable">商品名称:</label>
          				<Input className="shangpin-input"/>
          			</li>
          			<li className="clearfix">
          				<label className="shangpin-lable">商品名称:</label>
          				<Input className="shangpin-input"/>
          			</li>
          		</ul>
        	</Modal>
		)
	}
}
