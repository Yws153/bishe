import React from 'react'
import { connect } from 'react-redux'
import { Buttons } from 'app/components'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
  BrowserRouter
} from 'react-router-dom'

@connect(state => state)
class Home extends React.Component {
	render() {
		const { homeState, history } = this.props

		return (
			<div>
				<Buttons />
				<div><Link to="/detail">One</Link></div>
			</div>
		)
	}
}

export default Home