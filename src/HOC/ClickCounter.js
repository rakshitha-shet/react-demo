import React, { Component } from 'react'
import withCouner from './withCouner';

class ClickCounter extends Component {
  render() {
    const {count, incCounter} = this.props;
    return (
      <button onClick={incCounter}>Clicked {count} {this.props.name}</button>
    )
  }
}

export default withCouner(ClickCounter, 5);
