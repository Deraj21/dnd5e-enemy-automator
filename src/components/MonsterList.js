import React, { Component } from 'react'
import Axios from 'axios'
import MonsterListItem from './MonsterListItem'

class MonsterList extends Component {
  constructor(){
    super()

    this.state = {
      data: []
    }

    this.data = [];
    this.getData("https://api.open5e.com/monsters")
  }

  // TODO: change later to call 2nd page when the user scrolls to the bottom
  getData(url){
    return Axios.get(url)
      .then(response => {
        let newData = [...this.state.data, ...response.data.results]
        this.setState({
          data: newData
        })
      })
  }

  render() {        
    let monsterList = this.state.data.map(item => {
      return (
        <MonsterListItem name={item.name} type={item.type} />
      )
    })

    return (
      <div className="MonsterList" >
        <h2>Monster List</h2>
        { monsterList }
      </div>
    )
  }
}

export default MonsterList