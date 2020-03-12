import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Monster from './Monster';

class Encounter extends Component {
  constructor(){
    super()

    this.state = {
      monsterData: [],
      index: 0
    }
  }

  componentDidMount(){
    let { monsterNames } = this.props

    // load monsters
    monsterNames.forEach((name, i) => {
      this.getMonsters(name)
        .then(res => {
          let newMonsters = [...this.state.monsterData, { i: i, data: res.data.results[0] }]
          this.setState({
            monsterData: newMonsters
          })
        })
    })
  }

  getMonsters(name){
    return Axios.get(`https://api.open5e.com/monsters/?name=${name}`)
  }

  render(){

    // monster components
    let monsters = this.state.monsterData
      .sort((a,b) => a.i - b.i )
      .map(m => {
        return (
          <Monster data={ m.data } key={`Monster-${m.data.name}`}/>
        )
      })

    return (
      <div className="Encounter view">
        <h2>Run Encounter</h2>
        { monsters }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    monsterNames: state.monsterNames // read only
  }
}

export default connect(mapStateToProps, null)(Encounter)