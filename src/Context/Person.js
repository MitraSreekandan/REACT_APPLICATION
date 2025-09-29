import React, { useContext } from 'react'
import Countercontext from './Countercontext'

const Person = () => {
    const{person_name}=useContext(Countercontext);
  return (
    <div>
      <h2>Person Name: {person_name}</h2>
    </div>
  )
}

export default Person
