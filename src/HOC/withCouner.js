import React from "react";

const UpdatedComponent = (WrappedComponet, step = 1) =>{
    class withCouner extends React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          incCounter = () => {
              this.setState((prevState) => ({ count: prevState.count + step}))
          }


        render(){
            return <WrappedComponet count={this.state.count}  incCounter={this.incCounter} {...this.props}/>
        }
    }
    return withCouner; //function return statement
}

export default UpdatedComponent;