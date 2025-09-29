/*
import React, { useState } from 'react'

const Count = () => {
    
    const [state,setState]=useState(0);
    const handleIncrement=()=>{
        setState(state+1);
    }
    const handleDecrement=()=>{
        setState(state-1);
    }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Count

multi state
import React, { useState } from 'react'
const Count = () => {
    const [state,setState]=useState("Mitra");
    const handleDisplay=()=>{
        setState("mithu");
    }
    
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleDisplay}>Display</button>

    </div>
  )
}

export default Count

import React, { useState } from 'react'
const Count = () => {
    const [state,setState]=useState(false);    
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState((!state)?"ON":"OFF")}>Display</button>

    </div>
  )
}

export default Count


 import React, { Component } from 'react'

export class Counter extends Component {
   constructor(){
    super();
    this.state={
        value:0
    }
 }
   componentDidMount(){
    console.log("React Component Initialized");

   }
   componentDidUpdate(){
    console.log("state value updated");
   }
   componentWillUnmount(){
    console.log("Dom will be removed");
   }
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={()=>this.setState({value:this.state.value+1})}>Increment</button>
      </div>
    )
  }
}
  export default Count
*/

import React ,{useState} from 'react'
import Useeffect from './Useeffect';

const Count = () => {
    const [taggle,setTaggle]=useState(false);

  return (
    <div>
      <button onClick={()=>setTaggle(!taggle)}>
        {taggle ? "Hide":"Show"}
      </button>
      {taggle && <Useeffect/>}
    </div>
  )
}

export default Count