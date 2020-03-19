import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import MonsterList from './components/MonsterList'
import Encounter from './components/Encounter'
import ActionHistory from './components/ActionHistory'
import Footer from './components/Footer'
import Header from './components/Header'
import MessageToast from './components/MessageToast'

import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header/>
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

export default connect(mapStateToProps, null)(App);
