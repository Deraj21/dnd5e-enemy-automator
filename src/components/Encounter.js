import React, { Component } from 'react';
import { connect } from 'react-redux';
import Monster from './Monster';

class Encounter extends Component {

  render(){
    let { encounterData } = this.props

    // monster components
    let monsters = encounterData
      .sort((a,b) => a.i - b.i )
      .map(m => {
        return (
          <Monster data={ m } key={`Monster-${m.name}`}/>
        )
      })

    return (
      <div className="Encounter view">
        { monsters }
      </div>
    );
  }
}

function mapStateToProps(state){
  let {
    monsterNames,
    encounterData
  } = state
  return {
    monsterNames,
    encounterData
  }
}

export default connect(mapStateToProps, null)(Encounter)