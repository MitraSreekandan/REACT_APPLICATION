import React, { useContext } from 'react'
import Countercontext from './Countercontext'

const Increment = () => {
    const {handleIncrement}=useContext(Countercontext);
  return (
    <div>
      
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Increment
