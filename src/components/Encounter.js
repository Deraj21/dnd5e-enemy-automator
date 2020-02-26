import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { updateTest } from '../ducks/reducer';

class Encounter extends Component {
  constructor(){
    super()

    this.state = {
      monsters: []
    }

    this.nameList = [
      "Goblin",
      "Unicorn",
      "Skein Witch"
    ]
    this.nameList.forEach(name => {
      this.getMonster(name)
        .then(res => {
          let newMonsters = [...this.state.monsters, res.data.results[0]]
          this.setState({
            monsters: newMonsters
          })
        })
    })

    // binding
    this.handleInput = this.handleInput.bind(this);
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

    let monsters = this.state.monsters.map(mon => {
      return (
        <div>
          <h3>{mon.name}</h3>
          <h4>Actions:</h4>
          {
            mon.actions.map(action => {
              return (
                <p><strong>{action.name}:</strong> {action.desc}</p>
              )
            })
          }
        </div>
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