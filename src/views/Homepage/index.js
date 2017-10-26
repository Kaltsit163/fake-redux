import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from './connect';

import './index.css';

import Header from './components/Head/index';
import Content from './components/Content/index'

function createStore (reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => {
    listeners.push(listener);
  };
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener)=> {
      listener && listener()
    });
  }
  dispatch({});
  return { getState, dispatch, subscribe};
}

const themeReducer = (state, action) => {
  if (!state) {
    const defaultState = {
      'themeColor': '#fff'
    }
    return defaultState;
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state, themeColor: action.themeColor
      }
    break
    default: return state
  }
}

const store = createStore(themeReducer);

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext () {
    return { store } 
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

export default App;
