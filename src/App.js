import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentView } from './ducks/reducer'
import routes from './routes'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

function mapStateToProps(state){
  let {
    currentView
  } = state

  return {
    currentView
  }
}

export default connect(mapStateToProps, { updateCurrentView })(App);
