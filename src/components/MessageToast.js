import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateShowMessage } from '../ducks/reducer'

import Action from './Action'
import CloseButton from './buttons/CloseButton'

class MessageToast extends Component {
  constructor(props){
    super(props)

    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleCloseClick(){
    this.props.updateShowMessage(false)
  }

  render(){
    let { actionHistory, showMessage } = this.props
    let latest = actionHistory[actionHistory.length - 1] ? actionHistory[actionHistory.length - 1] : null

    return (
      <div className={`MessageToast${latest && showMessage ? "" : " hidden"}`}>
        <Action action={latest !== null ? latest : {}} />
        <CloseButton onClick={this.handleCloseClick}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {
    actionHistory,
    showMessage
  } = state
  return {
    actionHistory,
    showMessage
  }
}

export default connect(mapStateToProps, { updateShowMessage })(MessageToast)