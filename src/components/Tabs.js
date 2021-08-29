import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { updateCurrentView } from '../ducks/reducer'

import werewolf from '../media/werewolf.png'
import d20 from '../media/d20.png'
import swordShield from '../media/sword-shield.png'

class Tabs extends Component {
  constructor(props){
    super(props)

    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(e){
    let view = e.currentTarget.childNodes[1].innerHTML
    this.props.updateCurrentView(view)
  }

  render(){

    return (
      <div className="Tabs">
        <NavLink exact to="/" className="link" activeClassName="active-link" onClick={this.handleTabClick}>
          <img src={werewolf} alt="werewolf"/>
          <p>Add Monsters</p>
        </NavLink>
        <NavLink exact to="/Encounter" className="link" activeClassName="active-link" onClick={this.handleTabClick}>
          <img src={swordShield} alt="sword and sheild"/>
          <p>Run Encounter</p>
        </NavLink>
        <NavLink exact to="/ActionHistory" className="link" activeClassName="active-link" onClick={this.handleTabClick}>
          <img src={d20} alt="d20"/>
          <p>Action History</p>
        </NavLink>
      </div>
    )
  }
}

function mapStateToProps(state){
  let {
    currentView
  } = state

  return {
    currentView
  }
}

export default connect(mapStateToProps, { updateCurrentView })(Tabs);