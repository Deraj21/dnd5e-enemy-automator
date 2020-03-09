import React from 'react'

function Action(props){
  let { name, monsterName, atkRoll, dmgRoll } = props.action

  return (
    <div className="Action" key={`Action-${props.i}`}>
      <p><strong>{monsterName}</strong> uses <strong className="emph">{name}</strong></p>

      <li><strong>{atkRoll}</strong> to hit; <strong className="emph">{dmgRoll}</strong> damage.</li>
    </div>
  )
}

export default Action