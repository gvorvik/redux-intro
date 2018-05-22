import React, { Component } from 'react';
import { connect } from 'react-redux'

class ElementForm extends Component {

  constructor(props) {
    
    super(props)
    //this is local state - not the same as redux state
    //local state keeps track of user input
    this.state = {
      input1: ''
    }
  }


  //Updates state based on user input
  handleElementChange = (event) => {
    this.setState({
      input1: event.target.value,
    });
  };

  //Sends user input to redux
  sendElementToRedux = () => {
    const action = {type: 'INPUT_ONE', payload: this.state.input1};
    this.props.dispatch(action);
  }


  render() {
    return (
      <div className="App">
        <h3>Elements</h3>
        <input onChange={this.handleElementChange} value={this.state.input1} />
        <button onClick={this.sendElementToRedux}>Submit Input</button>
      </div>
    );
  }
}

//Connect allows us to dispatch actions
export default connect()(ElementForm);