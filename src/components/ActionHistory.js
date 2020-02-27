import React, { Component } from 'react'
import Action from './Action'

class ActionHistory extends Component{

  render(){

    return (
      <div className="ActionHistory">
        <h2>Action History</h2>
        <Action />
      </div>
    )
  }
}

export default ActionHistory