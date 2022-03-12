import React from "react";
import Child from "./Child";

export default class Parent extends React.Component{
    constructor(props){
        super(props);

        this.state = {message: "Hello Parent"};
        this.handleParent = this.handleParent.bind(this);
    }

    handleParent(name){
        const { message } = this.state;
        alert(` Hi ${message} from ${name}`);
    }

    render(){
        return(<div><Child handleChild={this.handleParent}/></div>)
    }
}

//parent has method it used child component and passes the method
//child uses thi smethod from props and uses it in onclick 