import React from 'react';
import ReactDOM from 'react-dom'
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'Recharts'

import { HashRouter, Route } from 'react-keeper'

import Home from 'app/containers/Home'

export default
class App extends React.Component{
	render() {
		return (
			<div>
                <HashRouter>
                    <div>
                        <Route cache component={ Home } path="/"/>
                    </div>
                </HashRouter>
			</div>
		)
	}
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
