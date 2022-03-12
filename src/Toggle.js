import React from "react";

export class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {toggle: false, tap: "rakshitha"};
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleClick(){
        this.setState((state) => ({toggle: !state.toggle}))
    }

    tap(){
        this.setState((prevState) => ({ tap: ((/rakshitha/g).test(prevState.tap)) ?  "rakshak": "rakshitha"}));
    }

    render(){
        return(
            <>
                <button onClick={this.handleClick}> click me  </button>
                <span>{this.state.toggle ? 'ON' : "OFF"}</span>

                <button onClick={() => this.tap()}> tap me  </button>
                <span>{this.state.tap}</span>
            </>
       )
    }
}
