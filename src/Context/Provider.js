import React, { useState } from 'react'
import Countercontext from './Countercontext';
import Display from './Display';
import Increment from './Increment';
import Person from './Person';
import Theme from './Theme';

const Provider = () => {
    const[state,setState]=useState(0);
    const person_name="Mitra";
    const[col,setCol]=useState(false);
    const handleIncrement=()=>{
        setState(state+1);
    }
    const handleColor=()=>{
        setCol(!col)
    }
  return (
   <Countercontext.Provider value={{state,handleIncrement,person_name,col,handleColor}}>
    <Display/>
    <Increment/>
    <Person/>
    <Theme/>
   </Countercontext.Provider>
  )
}

export default Provider
