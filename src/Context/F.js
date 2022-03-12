import React, { Component } from 'react'
import UContext from '../Hooks/UContext'
import { UserContext } from './C'

export default class F extends Component {
  render() {
    return (
        <>
        <UContext/>
     <UserContext.Consumer>
         {
            name =>  {return  <div> {name}</div>}
         }
     </UserContext.Consumer>
     </>
    )
  }
}
