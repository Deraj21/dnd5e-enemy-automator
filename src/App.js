import React, { Component } from 'react';
import './App.css';

import Encounter from './components/Encounter'
import MonsterList from './components/MonsterList'

class App extends Component {
  constructor(){
    super()

    this.isListView = false
  }
  
  render(){
    let { isListView } = this

    return (
      <div className="App">
        <h1>App</h1>
        {
          isListView
          ?
          <MonsterList/>
          : 
          <Encounter/>
        }
      </div>
    );
  }
}

export default App;
