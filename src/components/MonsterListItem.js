import React from 'react'

function MonsterListItem(props){

  let { name, type } = props

  return (
    <div className="MonsterListItem">
      <h4>{name}</h4>
      <p>{type}</p>
    </div>
  )
}

export default MonsterListItem