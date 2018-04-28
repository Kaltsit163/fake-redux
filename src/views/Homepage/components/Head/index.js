import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import logo from '../../../../assets/logo.svg';
import './index.css';

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" style={{
          color: this.props.themeColor
        }}>Made in Aybss</h1>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;
