import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSearch, clearEncounter, clearActionHistory } from '../ducks/reducer'

import TargetAC from './TargetAC'
import Tabs from './Tabs'
import Roller from './Roller'

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

  render(){
    let { currentView, search } = this.props
    let clearEncounterBtn = <button onClick={this.props.clearEncounter}>Clear Encounter</button>
    let clearActionsBtn = <button onClick={this.props.clearActionHistory}>Clear Actions</button>

    return (
      <div className="Header fixed-elem">
        <Tabs />
        <div>
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
              { clearActionsBtn }
              <TargetAC />
            </div>
            :
            currentView === ACTION_HISTORY_VIEW
            ?
            <div>
              { clearActionsBtn }
              <TargetAC />
            </div>
            :
            <div>404: view not found</div>
          }
          <Roller />
        </div>
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

export default connect(mapStateToProps, { updateSearch, clearEncounter, clearActionHistory })(Header);