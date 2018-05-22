import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
//logger just logs out to console - but makes them clean and easy to read
import logger from 'redux-logger';


//Reducer
//The action is what we dispatched from the component (in this case app.js)
const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log('1st Reducer', action);
        return state + 1;
    } else if(action.type === 'BUTTON_TWO') {
        return state - 1;
    }
    return state; //return next state, which will get passed back into state parameter next time function is called
};

const secondReducer = (state = [], action) => {
    if (action.type === 'BUTTON_THREE') {
        console.log('2nd Reducer', action);
        //create entirely new array with spread operator (Immutability!)
        return [...state, 'oreo'];
    } else if(action.type === 'EAT_OREOS') {
        return [];
    }
    return state;
};

const thirdReducer = (state = [], action) => {
    if (action.type === 'INPUT_ONE') {
        console.log('3rd Reducer', action);
        state = [...state, action];
        //create entirely new array with spread operator (Immutability!)
        return state;
    } 
    return state;
};


//Create store can only take in one reducer
const storeInstance = createStore(
    //Combine the reducers and do some extra validation
    combineReducers({
        firstReducer,
        secondReducer,
        thirdReducer,
    }),

    //set up the logger
    applyMiddleware(logger)

);


//Wrap App in Provider, which gives all components access to the redux store!!
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
