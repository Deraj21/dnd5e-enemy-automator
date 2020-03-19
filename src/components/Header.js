import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSearch, clearEncounter } from '../ducks/reducer'

const MONSTER_LIST_VIEW = "Add Monsters",
      ENCOUNTER_VIEW = "Run Encounter",
      ACTION_HISTORY_VIEW = "Action History"

class Header extends Component {
  constructor(props){
    super(props)

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(e){
    this.props.updateSearch( e.target.value )
  }

  // LEFT OFF: figure out why 2nd `clearEncounterBt` doesn't work

  render(){
    let { currentView, search } = this.props
    let clearEncounterBtn = <button onClick={this.props.clearEncounter}>Clear Encounter</button>

    return (
      <div className="Header fixed-elem">
        <h2>{currentView}</h2>
        {
          currentView === MONSTER_LIST_VIEW
          ?
          <div>
            <input type="text" value={search} onChange={this.handleSearchChange}/>
            { clearEncounterBtn }
          </div>
          :
          currentView === ENCOUNTER_VIEW
          ?
          <div>
            { clearEncounterBtn }
          </div>
          :
          currentView === ACTION_HISTORY_VIEW
          ?
          <div>action history</div>
          :
          <div>404: view not found</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  let {
    currentView,
    search
  } = state

  return {
    currentView,
    search
  }
}

export default connect(mapStateToProps, { updateSearch, clearEncounter })(Header);