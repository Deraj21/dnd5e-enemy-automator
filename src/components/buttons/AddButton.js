import React from 'react'

export default function AddButton(props){

  return (
    <div className="AddButton Button">
      <svg height="20" width="20" onClick={props.onClick}>
        <path fill="none" d="M10 5 L10 15 M5 10 L15 10" />
      </svg>
    </div>
  )
}