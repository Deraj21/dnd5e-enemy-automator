import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { updateCurrentView } from '../ducks/reducer'

import werewolf from '../media/werewolf.png'
import d20 from '../media/d20.png'
import swordShield from '../media/sword-shield.png'

class Footer extends Component {
  constructor(props){
    super(props)

    this.handleTabClick = this.handleTabClick.bind(this)
  }

  handleTabClick(e){
    let view = e.target.getAttribute("toview");
    this.props.updateCurrentView(view);
  }

  render(){

    return (
      <div className="Footer">
        <NavLink to="/MonsterList" className="link" activeClassName="active-link">
          <img src={werewolf} alt="werewolf"/>
          <p>Add Monsters</p>
        </NavLink>
        <NavLink to="/Encounter" className="link" activeClassName="active-link">
          <img src={swordShield} alt="sword and sheild"/>
          <p>Run Encounter</p>
        </NavLink>
        <NavLink to="/ActionHistory" className="link" activeClassName="active-link">
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

export default connect(mapStateToProps, { updateCurrentView })(Footer);