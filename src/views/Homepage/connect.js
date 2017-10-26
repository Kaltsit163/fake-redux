import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (HighCom) => {
  class connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    constructor () {
      super();
      this.state = {
        allProps: {}
      }
    }
    componentWillMount () {
      const { store } = this.context;
      this._updataProps();
      store.subscribe(() =>{
        this._updataProps();
      })
    }
    _updataProps () {
      const { store } = this.context;
      let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {};
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }
    render () {
      return <HighCom {... this.state.allProps}/>
    }
  }
  return connect
}

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext () {
    return {
      store: this.props.store
    }
  }
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}