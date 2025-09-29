import React, { useContext } from 'react'
import Countercontext from './Countercontext';

const Display = () => {
    const{state}=useContext(Countercontext);
  return (
    <div>
      <h1>Display Data</h1>
      <h1>{state}</h1>
    </div>
  )
}

export default Display
