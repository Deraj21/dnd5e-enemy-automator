import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTargetAC } from '../ducks/reducer'

class TargetAC extends Component{
  constructor(props){
    super(props)

    this.handleRangeChange = this.handleRangeChange.bind(this)
  }

  handleRangeChange(e){
    this.props.updateTargetAC(e.target.value)
  }

  render(){
    let { targetAC } = this.props
    
    return (
      <div className="TargetAC">
        <span>Target AC: </span>
        <input type="range" onChange={this.handleRangeChange} min="3" max="25" value={targetAC}/>
        <span>{targetAC}</span>
      </div>
    )
  }
}

function mapStateToProps(state){
  let {
    targetAC
  } = state
  return {
    targetAC
  }
}

export default connect(mapStateToProps, { updateTargetAC })(TargetAC)