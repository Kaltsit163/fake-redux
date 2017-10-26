import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from '../../connect';
import Swicth from '../Switch/index';

import './index.css';

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
      <div className="App-Content">
        <p style={{
          color: this.props.themeColor
        }}>Deep in Aybss</p>
        <Swicth />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content);

export default Content
