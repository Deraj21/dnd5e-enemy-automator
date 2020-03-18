import React from 'react'

function Action(props){
  let { name, monsterName, atkRolls, dmgRolls } = props.action

  console.log(props.action)
  
  let rows = atkRolls.map((item, i) => {
    return (
      <tr>
        <td><strong>{i+1}</strong></td>
        <td>{atkRolls[i]}</td>
        <td>{dmgRolls[i]}</td>
      </tr>
    )
  })

  return (
    <div className="Action" key={`Action-${props.i}`}>
      <p><strong>{monsterName}</strong> uses <strong className="emph">{name}</strong></p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>to hit</th>
            <th>damage</th>
          </tr>
          { rows }
        </tbody>
      </table>
      {/* <li><strong>{atkRoll}</strong> to hit; <strong className="emph">{dmgRoll}</strong> damage.</li> */}
    </div>
  )
}

export default Action