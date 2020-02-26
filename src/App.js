import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentView } from './ducks/reducer'
import './App.css';

import Encounter from './components/Encounter'
import MonsterList from './components/MonsterList'

class App extends Component {
  constructor(){
    super()

    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(e){
    let view = e.target.getAttribute("toview");
    this.props.updateCurrentView(view);
  }
  
  render(){
    let { currentView } = this.props

    return (
      <div className="App">
        <div className="tabs">
          <button toview="MonsterList" onClick={this.handleTabClick}>Add Monsters</button>
          <button toview="Encounter" onClick={this.handleTabClick}>Run Encounter</button>
        </div>

        {
          currentView === "MonsterList"
          ?
          <MonsterList/>
          :
          currentView === "Encounter"
          ?
          <Encounter/>
          :
          <p>View not recognized</p>
        }
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
