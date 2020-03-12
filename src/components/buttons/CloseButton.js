import React from 'react'

export default function CloseButton(props){

  return (
    <div className="CloseButton">
      <svg height="20" width="20" onClick={props.onClick}>
        <path fill="none" d="M5 5 L15 15 M5 15 L15 5" />
      </svg>
    </div>
  )
}