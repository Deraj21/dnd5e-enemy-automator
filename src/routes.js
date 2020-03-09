import React from 'react'
import { Route } from 'react-router-dom'

import MonsterList from './components/MonsterList'
import Encounter from './components/Encounter'
import ActionHistory from './components/ActionHistory'
import Footer from './components/Footer'

export default (
  <div>
    <Route path="/" component={Footer}/>
    <Route exact path="/MonsterList" component={MonsterList}/>
    <Route exact path="/Encounter" component={Encounter}/>
    <Route exact path="/ActionHistory" component={ActionHistory}/>
  </div>
)
