import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { removeEncounterItem, addEncounterItem } from '../ducks/reducer'
import AddButton from './buttons/AddButton'

class MonsterListItem extends Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.getAdded = this.getAdded.bind(this)
  }

  getMonster(name){
    return Axios.get(`https://api.open5e.com/monsters/?name=${name}`)
  }

  handleClick(){
    let { name, addEncounterItem, removeEncounterItem } = this.props
    let added = this.getAdded()

    if (!added){
      this.getMonster(name)
        .then(res => {
          addEncounterItem(res.data.results[0])
        })
    } else {
      removeEncounterItem(name)
    }
  }

  getAdded(){
    let { name, encounterData } = this.props
    return encounterData.findIndex(item => item.name === name) !== -1
  }

  render(){
    let { name, type, size, hp, cr } = this.props
    let added = this.getAdded()
  
    return (
      <tr className={`MonsterListItem${added ? " added" : ""}`} title={`${added ? "Remove from" : "Add to"} Encounter`} onClick={this.handleClick}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{cr}</td>
        <td>
          <AddButton />
        </td>
        {/* <td>{size}</td> */}
        {/* <td>{hp}</td> */}
      </tr>
    )
  }
}

function mapStateToProps(state){
  let {
    encounterData
  } = state
  return {
    encounterData
  }
}

export default connect(mapStateToProps, { addEncounterItem, removeEncounterItem })(MonsterListItem)