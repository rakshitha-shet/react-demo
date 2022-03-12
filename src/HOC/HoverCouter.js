import React, { Component } from 'react'
import withCouner from './withCouner';

class HoverCounter extends Component {
  render() {
      const {count, incCounter} = this.props;
    return (
      <div onMouseMove={incCounter}>Hovered {count} {this.props.age}</div>
    )
  }
}

export default withCouner(HoverCounter);
