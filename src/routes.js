import React from 'react'
import { Route } from 'react-router-dom'

import MonsterList from './components/MonsterList'
import Encounter from './components/Encounter'
import ActionHistory from './components/ActionHistory'
import Footer from './components/Footer'
import MessageToast from './components/MessageToast'

export default (
  <div>
    <Route path="/" component={Footer}/>
    <Route path="/" component={MessageToast}/>
    <Route exact path="/" component={MonsterList}/>
    <Route exact path="/Encounter" component={Encounter}/>
    <Route exact path="/ActionHistory" component={ActionHistory}/>
  </div>
)
