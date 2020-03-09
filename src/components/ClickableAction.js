import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addActionItem } from '../ducks/reducer'

class ClickableAction extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  rollDmg(){
    let { damage_dice, damage_bonus } = this.props.action
    let total = damage_bonus
    if (damage_dice){
      let num = parseInt(damage_dice.split('d')[0])
      let die = parseInt(damage_dice.split('d')[1])

      for (let i = 0; i < num; i++){
        total += Math.ceil(Math.random() * die)
      }
    }
    
    return total
  }

  rollAtk(){
    let { attack_bonus } = this.props.action
    return Math.ceil(Math.random() * 20) + attack_bonus
  }

  handleClick(e){
    let { monsterName, action } = this.props
    let { name } = action

    // add action to state
    this.props.addActionItem({
      monsterName, name,
      atkRoll: this.rollAtk(),
      dmgRoll: this.rollDmg()
    })
  }

  render(){
    let { name, desc } = this.props.action

    return (
      <p className="monster-action" title="Click to Trigger" onClick={this.handleClick}
      ><strong className="emph">{name}.</strong> {desc}</p>
    )
  }
}

function mapStateToProps(state){
  let {
    actionHistory
  } = state
  return {
    actionHistory
  }
}

export default connect(mapStateToProps, { addActionItem })(ClickableAction)