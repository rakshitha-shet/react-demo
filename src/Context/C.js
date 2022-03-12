import React, { Component } from 'react'
import E from './E'
export const UserContext = React.createContext();

export default class C extends Component {
  render() {
    return (
        <UserContext.Provider value="rakshitha context">
            <E/>
        </UserContext.Provider>
      
    )
  }
}
