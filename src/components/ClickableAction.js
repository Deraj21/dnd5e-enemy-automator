import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addActionItem, updateShowMessage } from '../ducks/reducer'

class ClickableAction extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
  }

  rollDmg(crit = false){
    console.log(this.props.action)
    let { damage_dice, damage_bonus } = this.props.action
    // parse if + is in damage dice
    let parts = damage_dice ? damage_dice.replace(' ', '').split('+') : ''
    let bonus = damage_bonus ? damage_bonus : parts[1] ? parseInt(parts[1], 10) : 0
    let total = bonus
    let breakdown = ''
    if (damage_dice){

      let num = parseInt(damage_dice.split('d')[0], 10) * (crit ? 2 : 1)
      let die = parseInt(damage_dice.split('d')[1], 10)

      // roll for number of dice; add to total & dice breakdown string
      for (let i = 1; i <= num; i++){
        let roll = Math.ceil(Math.random() * die)
        total += roll
        breakdown += roll + (i !== num ? ' + ' : bonus ? ' + ' + bonus : '')
      }
    }

    return {
      roll: total,
      breakdown: breakdown
    }
  }

  rollAtk(){
    let { attack_bonus } = this.props.action

    let bonus = attack_bonus ? attack_bonus : 0
    let natRoll = Math.ceil(Math.random() * 20)
    return {
      roll: natRoll === 20 ? 'CRIT' : natRoll + bonus,
      breakdown: `${natRoll} + ${bonus}`
    }
  }

  handleClick(e, numTimes = 1){
    let { monsterName, action, isMulti } = this.props
    let { name } = action
    if (isMulti) { return }

    let attacks = []
    let damages = []

    for (let i = 0; i < numTimes; i++){
      let atk = this.rollAtk()
      let dmg = this.rollDmg(atk.roll === 'CRIT')
      attacks.push(atk)
      damages.push(dmg)
    }

    // add actions to state
    this.props.addActionItem({
      monsterName,
      name,
      attacks: attacks,
      damages: damages
    })
    this.props.updateShowMessage(true)
  }

  handleDropdownChange(e){
    let numTimes = parseInt(e.target.value, 10)
    numTimes = numTimes !== null ? numTimes : 0
    e.target.value = "-"

    this.handleClick(e, numTimes)
  }

  render(){
    let { isMulti, action } = this.props
    let { name, desc } = action

    let options = ["-", 1, 2, 3, 4, 5, 10, 20].map((n) => {
      return (
        <option className="option" key={`option-${n}`} value={n}>{n}</option>
      )
    })

    return (
      <div className={`monster-action${isMulti ? " multi" : ""}`}>
        <p onClick={this.handleClick}>
          <strong className="emph">{name}. </strong>{desc}
        </p>
        {
          !isMulti
          ?
          <select onChange={this.handleDropdownChange} title="group action">
            { options }
          </select>
          :
          ""
        }
      </div>
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