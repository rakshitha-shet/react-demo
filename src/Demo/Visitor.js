import React from "react";

export default class Visitor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Welcome Visitor!"
        }
    }

    handleClick(){
        this.setState({
            message: "Thank you for sunscribing!"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleClick()}> Subscribe</button>
            </div>
        )
    }
}