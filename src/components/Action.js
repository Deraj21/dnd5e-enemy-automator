import React from 'react'
import { connect } from 'react-redux'

function Action(props){
  let { action, targetAC } = props
  let { name, monsterName, atkRolls, dmgRolls } = action
  atkRolls = atkRolls !== undefined ? atkRolls : []
  dmgRolls = dmgRolls !== undefined ? dmgRolls : []
  
  let totalDmg = 0

  let rows = atkRolls.map((roll, i) => {
    let hit = roll >= targetAC || roll === 'CRIT'
    if (hit) {totalDmg += dmgRolls[i]}

    return (
      <tr key={`roll-${i}`} className={hit ? 'hit' : 'miss'}>
        <td><strong>{i+1}</strong></td>
        <td>{atkRolls[i]}</td>
        <td>{dmgRolls[i]}</td>
      </tr>
    )
  })


  return (
    <div className="Action" key={`Action-${props.i}`}>

      <h5><strong>{monsterName}</strong> uses <strong className="emph">{name}</strong></h5>

      <div className="sides" >
        <div className="left side">
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
        </div>

        <div className="right side">
          <p><strong>Total Dmg</strong></p><h3>{totalDmg}</h3>
        </div>
      </div>


    </div>
  )
}

function mapStateToProps(state){
  let {
    targetAC
  } = state
  return {
    targetAC
  }
}

export default connect(mapStateToProps, null)(Action)