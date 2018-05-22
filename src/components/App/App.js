import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import ElementForm from '../form/ElementForm';
import ElementList from '../elementList/ElementList';

class App extends Component {

  buttonOneClick = () => {
    //dispatch takes in an action
    const action = { type: 'BUTTON_ONE', someProp: 'Gregory' };
    this.props.dispatch(action);
  }

  buttonTwoClick = () => {
    const action = { type: 'BUTTON_TWO' };
    this.props.dispatch(action);
  }

  buttonThreeClick = () => {
    const action = { type: 'BUTTON_THREE' };
    this.props.dispatch(action);
  };

  eatAllOreos = () => {
    const action = { type: 'EAT_OREOS' };
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="App">
        <h3>Stepper</h3>
        {/* Matches up with first reducer */}
        <button onClick={this.buttonOneClick}>Button 1</button>

        {/* Matches up with second reducer */}
        <button onClick={this.buttonTwoClick}>Button 2</button>

        <h3>Oreos</h3>
        <button onClick={this.buttonThreeClick}>Add Oreo</button>
        <button onClick={this.eatAllOreos}>Eat All Oreos</button>

        <ElementForm />
        <ElementList />

      </div>
    );
  }
}

//Connect allows us to dispatch actions
export default connect()(App);
