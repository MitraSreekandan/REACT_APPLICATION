import React, { useEffect,useState } from 'react'

const Useeffect = () => {
    const[state,setState]=useState(0);
    useEffect(() => {   //useEffectSnippet
      console.log("Initialized Successfully");
      
    }, [])
    useEffect(() => {
        if(state>0){
            console.log("value updated successfully",state)
        }
      
    }, [state])
    useEffect(() => {
      return () => {
        console.log("removed suuceesfully");
      }
    }, [])
    
    
    const handleIncrement=()=>{
        setState(state+1)
    }
    const handleDecrement=()=>{
        setState(state-1);;
    }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleIncrement}>Increment</button><br/><br/>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Useeffect
