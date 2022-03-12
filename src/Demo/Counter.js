import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state = { counter: 0}
    }

    handleClick(){
        this.setState((prevState, props) => ({ counter: prevState.counter + props.step}), () => { console.log("counter value", this.state.counter)})
    }

    incFive(){
        this.handleClick()
        this.handleClick()
        this.handleClick()
        this.handleClick()
        this.handleClick()
    }
  render() {
    return (
        <>
            <div>Counter: {this.state.counter}</div>
            <button onClick={() => this.handleClick()}> Increment</button>
            <button onClick={() => this.incFive()}> Increment 5</button>
        </>
      
    )
  }
}
