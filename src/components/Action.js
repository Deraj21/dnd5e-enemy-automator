import React from 'react'
import { connect } from 'react-redux'

function Action(props){
  let { action, targetAC } = props
  let { name, monsterName, attacks, damages } = action
  attacks = attacks !== undefined ? attacks : []
  damages = damages !== undefined ? damages : [{roll: 0, breakdown: ''}]
  console.log(damages)
  let totalDmg = 0

  let rows = attacks.map((attack, i) => {
    let hit = attack.roll >= targetAC || attack.roll === 'CRIT'
    if (hit) {totalDmg += damages[i].roll}

    return (
      <tr key={`roll-${i}`} className={hit ? 'hit' : 'miss'}>
        <td><strong>{i+1}</strong></td>
        <td>{attacks[i].roll}</td>
        <td>({attacks[i].breakdown})</td>
        <td>{damages[i].roll}</td>
        <td>({damages[i].breakdown})</td>
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
                <th></th>
                <th>damage</th>
                <th></th>
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