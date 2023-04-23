import React, { Component } from "react";
import { connect } from 'react-redux'
import { addActionItem, updateShowMessage } from '../ducks/reducer'

class Roller extends Component {
    constructor(props){
        super(props)

        this.state = {
            rollQuery: ""
        }

        this.handleQueryChange = this.handleQueryChange.bind(this)
        this.parseQuery = this.parseQuery.bind(this)
    }

    handleQueryChange(e){
        this.setState({ rollQuery: e.target.value })
    }

    parseQuery(){
        console.log(this.state.rollQuery)
        // ready to parse and add to action history
        // trim/remove spaces
        // split via '+'
        // split via 'd'
        // figure out how to re-use 'ClickableAction' functions
    }

    render(){
        return (
            <div className="Roller">
                <button onClick={this.parseQuery}>Roll!</button>
                <input type="text" onChange={this.handleQueryChange} value={this.state.rollQuery}/>
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

export default connect(mapStateToProps, { addActionItem, updateShowMessage })(Roller)