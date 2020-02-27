import React, { Component } from 'react'
import Axios from 'axios'
import MonsterListItem from './MonsterListItem'

class MonsterList extends Component {
  constructor(){
    super()

    this.state = {
      data: [],
      nextUrl: ''
    }

    this.data = [];
    this.getData()
  }

  componentDidMount(){
    this.getData()
  }

  // TODO: change later to call 2nd page when the user scrolls to the bottom
  getData(){
    return Axios.get("https://api.open5e.com/monsters")
      .then(response => {
        let newData = [...this.state.data, ...response.data.results]
        this.setState({
          data: newData,
          nextUrl: response.data.next
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
        <h2>Add Monsters</h2>
        { monsterList }
      </div>
    )
  }
}

export default MonsterList