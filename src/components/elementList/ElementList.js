import React, { Component } from 'react';
import { connect } from 'react-redux'

//Must happen if we are grabbing information from the redux store
const mapReduxStateToProps = (reduxState) => (
   {reduxState}
);


class ElementList extends Component {

    render() {

        return (
            <div className="App">
                <h3>Hello Element List</h3>
                <ul>
                    {this.props.reduxState.thirdReducer.map((element, i) => <li key={i}>{element.payload}</li>)}
                </ul>
            </div>
        );
    }
}

//Connect allows us to dispatch actions
export default connect(mapReduxStateToProps)(ElementList);