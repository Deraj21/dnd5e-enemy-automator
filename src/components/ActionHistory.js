import React, { Component } from 'react'
import { connect } from 'react-redux'
import Action from './Action'

class ActionHistory extends Component{

  render(){
    let actions = this.props.actionHistory.map((action, i) => {
      return (
        <Action action={action} i={i} key={'Action-'+i} />
      )
    })

    return (
      <div className="ActionHistory view">
        { actions }
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

export default connect(mapStateToProps)(ActionHistory)