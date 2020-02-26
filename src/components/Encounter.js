import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateTest } from '../ducks/reducer';
import Monster from './Monster';

class Encounter extends Component {
  constructor(){
    super()

    this.state = {
      monsterData: []
    }

    // binding
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    let { monsterNames } = this.props

    // load monsters
    monsterNames.forEach(name => {
      this.getMonster(name)
        .then(res => {
          let newMonsters = [...this.state.monsterData, res.data.results[0]]
          this.setState({
            monsterData: newMonsters
          })
        })
    })
  }

  getMonster(name){
    return Axios.get(`https://api.open5e.com/monsters/?name=${name}`)
  }

  handleInput(e){
    console.log(e.target.value);
    this.props.updateTest(e.target.value);
  }

  render(){
    let { test } = this.props

    let monsters = this.state.monsterData.map(data => {

      return (
        <Monster data={ data }/>
      )
    })

    return (
      <div className="Encounter">
        <h2>Encounter Page</h2>
        <h2>{test}</h2>
        <input onChange={this.handleInput} value={test}/>

        { monsters }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    test: state.test, // edit
    monsterNames: state.monsterNames // read only
  }
}

export default connect(mapStateToProps, { updateTest })(Encounter)