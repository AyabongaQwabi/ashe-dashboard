import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import appStore from './store/reducers'
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

const logger = ({ getState, dispatch }) => next => action =>{
   
    console.group(`%c ${action.type}`, 'color:#000')
    console.dir(action)
    console.group('%c Current State', 'color:#3cf')
    console.dir(getState().toJS())
    console.groupEnd();

    const nextAction = next(action)
    console.group('%c Next State' , 'color:#33f')
    console.dir(getState().toJS())
    console.groupEnd();
    console.groupEnd();
    return nextAction;
}

const store = createStore(appStore,fromJS({}), applyMiddleware(...[thunk,logger]))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
