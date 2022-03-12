import React from 'react';

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = { date: new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({date: new Date()})
    }

    render(){
        return(
            <h1>Hello {this.state.date.toLocaleString()}</h1>
        )
    }
}

export default Clock;

//1) constructor calls initialize the state
//2) render initail render
//3) componentDidMount sets interval and calls callback thick method for every 1sec
//4) which in turn updtaes the state and again calles render method
//5) once unmounted clears the setinterval timer