import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Prompt,
  BrowserRouter
} from 'react-router-dom'

import createHistory from 'history/createHashHistory'
// import { createHistory } from 'history'
const history = createHistory()
const location = history.location

import Home from './Home'
import Detail from './Detail'

const CreateRouter = () => (
  <HashRouter history={history}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detail">Detail</Link></li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
    </div>
  </HashRouter>
)

export default CreateRouter