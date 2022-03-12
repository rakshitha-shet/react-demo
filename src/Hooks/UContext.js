import React, {useContext} from 'react'
import { UserContext } from '../Context/C'

export default function UContext() {
    const name = useContext(UserContext);
  return (
    <div> ABC{name}</div>
  )
}
