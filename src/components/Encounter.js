import React, { Component } from 'react'
import Axios from 'axios';

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
  }

  getMonster(name){
    return Axios.get(`https://api.open5e.com/monsters/?name=${name}`)
  }

  render(){
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

        { monsters }
      </div>
    );
  }
}

export default Encounter