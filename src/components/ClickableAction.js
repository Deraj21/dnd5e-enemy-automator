import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addActionItem, updateShowMessage } from '../ducks/reducer'

class ClickableAction extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  rollDmg(crit = false){
    let { damage_dice, damage_bonus } = this.props.action
    let total = damage_bonus ? damage_dice : 0
    if (damage_dice){

      let num = parseInt(damage_dice.split('d')[0]) * (crit ? 2 : 1)
      let die = parseInt(damage_dice.split('d')[1])

      for (let i = 0; i < num; i++){
        total += Math.ceil(Math.random() * die)
      }
    }

    return total
  }

  rollAtk(){
    let { attack_bonus } = this.props.action
    let natRoll = Math.ceil(Math.random() * 20)
    return natRoll === 20 ? 'CRIT' : natRoll + attack_bonus
  }

  handleClick(e){
    let { monsterName, action } = this.props
    let { name } = action
    let atkRoll = this.rollAtk()

    // add action to state
    this.props.addActionItem({
      monsterName, name,
      atkRoll: atkRoll,
      dmgRoll: this.rollDmg(atkRoll === 'CRIT')
    })
    this.props.updateShowMessage(true)
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

export default connect(mapStateToProps, { addActionItem, updateShowMessage })(ClickableAction)