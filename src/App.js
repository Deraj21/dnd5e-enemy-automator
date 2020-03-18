import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateCurrentView } from './ducks/reducer'

import MonsterList from './components/MonsterList'
import Encounter from './components/Encounter'
import ActionHistory from './components/ActionHistory'
import Footer from './components/Footer'
import MessageToast from './components/MessageToast'

import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Footer/>
        <MessageToast/>
        <div>
          <Route exact path="/" component={MonsterList}/>
          <Route exact path="/Encounter" component={Encounter}/>
          <Route exact path="/ActionHistory" component={ActionHistory}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  let {
    currentView
  } = state

  return {
    currentView
  }
}

export default connect(mapStateToProps, { updateCurrentView })(App);
