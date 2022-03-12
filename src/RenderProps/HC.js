import React, { Component } from 'react'

export default class HC extends Component {
  render() {
      const { count, incCount} = this.props
    return (
      <h1 onMouseMove={incCount}>HC clicked {count}</h1>
    )
  }
}
