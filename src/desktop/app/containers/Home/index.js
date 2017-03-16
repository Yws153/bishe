import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'Recharts'

import { Link, Route } from 'react-keeper'

import Buttons from 'app/components/Button'
import Detail from 'app/containers/detail'

export default
class Home extends React.Component{
	render() {
		return (

			<div>
				<Buttons/>

				<div>
			  		<ul>
						<Link to='/ep'>Info</Link>
					</ul>

                </div>
                    <Route index component={ Detail } path='/ep'/>
            </div>

		)
	}
}
