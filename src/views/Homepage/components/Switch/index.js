import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './index.css';

class Switch extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }
  changeColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color);
    }
  }
  render () {
    return (
      <div className="App-Switch">
        <button 
          onClick={this.changeColor.bind(this, 'rgba(48, 108, 182, 1)')} 
          className="i-btn blue">Blue</button>
        <button 
          onClick={this.changeColor.bind(this, 'rgba(232, 62, 74 ,1')}
          className="i-btn red">Red</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSwitchColor: (color) => {
      dispatch({
        'type': 'CHANGE_COLOR',
        'themeColor': color
      })
    }
  }
}

Switch = connect(mapStateToProps, mapDispatchToProps)(Switch);

export default Switch;