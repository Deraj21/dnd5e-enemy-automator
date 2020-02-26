import React, { Component } from 'react';
import './App.css';

import Encounter from './components/Encounter'
import MonsterList from './components/MonsterList'

class App extends Component {
  constructor(){
    super()

    this.isListView = true
  }
  
  render(){
    let { isListView } = this

    return (
      <div className="App">
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
