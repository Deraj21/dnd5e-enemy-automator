import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToEncounter, removeFromEncounter } from '../ducks/reducer'
import AddButton from './buttons/AddButton'

class MonsterListItem extends Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.getAdded = this.getAdded.bind(this)
  }

  handleClick(){
    let { name, addToEncounter, removeFromEncounter } = this.props
    let added = this.getAdded()

    if (!added){
      addToEncounter(name)
    } else {
      removeFromEncounter(name)
    }
  }

  getAdded(){
    let { name, monsterNames } = this.props
    return monsterNames.indexOf(name) !== -1
  }

  render(){
    let { name, type, size, hp, cr, monsterNames } = this.props
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
    monsterNames
  } = state
  return {
    monsterNames
  }
}

export default connect(mapStateToProps, { addToEncounter, removeFromEncounter })(MonsterListItem)