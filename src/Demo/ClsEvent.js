import React, { Component } from 'react'

export default class ClsEvent extends Component {

    constructor(props){
        super(props);
        this.first = this.first.bind(this);
    }

    first(){
        console.log("First")
    }

    second(){
        console.log("second")
    }

    third(){
        console.log("third")
    }

  render() {
    return (
        <>
            <div>ClsEvent</div>
            <button onClick={this.first}> Class Event first</button>
            <button onClick={() => this.second()}> Class Event second</button>
            <button onClick={this.third}> Class Event third</button>
        </>
    )
  }
}
