import React,{useContext}from 'react'
import Countercontext from './Countercontext';

const Theme = () => {
const {col} = useContext(Countercontext);
  const{handleColor}=useContext(Countercontext);
  return (
    <div style={{
        backgroundColor: col? "black" : "lightblue",
        color: col? "white" : "black",
    }}>
        <h1>{col? "Dark Mode":"Light Mode"}</h1>
        <button onClick={handleColor}>Change Mode</button>

      
    </div>
  )
}

export default Theme