import React, { Component } from 'react'

export default class CC extends Component {
  render() {
    const { count, incCount} = this.props
    return (
      <button onClick={incCount}>CC clicked {count}</button>
    )
  }
}
