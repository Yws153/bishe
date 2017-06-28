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
import Detail from './detail/index.js'
import Login from './Home/login.jsx'
import Tuan from './Tuan'

const CreateRouter = () => (
  <HashRouter history={history}>
    <div>
    
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Login} />
      <Route path="/tuan" component={Tuan} />
    </div>
  </HashRouter>
)

export default CreateRouter

 // <ul>
      //   <li><Link to="/">Home</Link></li>
      //   <li><Link to="/login">Detail</Link></li>
      // </ul>