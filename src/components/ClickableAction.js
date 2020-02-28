import React, { Component } from 'react'

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

    let txt = ``
    txt += `${monsterName} uses ${name}\n`
    txt += `${this.rollAtk()} to hit; for ${this.rollDmg()} damage`

    console.log(txt);
  }

  render(){
    let { name, desc } = this.props.action

    return (
      <p className="monster-action" title="Click to Trigger" onClick={this.handleClick}
      ><strong className="emph">{name}.</strong> {desc}</p>
    )
  }
}

export default ClickableAction