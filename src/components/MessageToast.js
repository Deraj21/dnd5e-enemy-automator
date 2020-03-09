import React, { Component } from 'react'
import { connect } from 'react-redux'

import Action from './Action'

class MessageToast extends Component {

  render(){
    let { actionHistory } = this.props
    let latest = actionHistory[actionHistory.length - 1] ? actionHistory[actionHistory.length - 1] : {}

    return (
      <div className="MessageToast">
        <Action action={latest} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {
    actionHistory
  } = state
  return {
    actionHistory
  }
}

export default connect(mapStateToProps, null)(MessageToast)