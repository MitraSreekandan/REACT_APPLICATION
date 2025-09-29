import React from 'react'
import UserInput from './UserInput'

const Form = () => {
    const user=UserInput("");
    const pass=UserInput("");
    const handleSubmit=()=>{
        console.log("registered successfully")
    }
  return (
<form onSubmit={handleSubmit}>
<div>
       <input type='text'placeholder='pass' value={pass.data} onChange={pass.handleData}></input>
        
            <input type='text' placeholder='name' value={user.data} onChange={user.handleData}>
            </input>
        <button type='submit'>Submitted</button>
        <button onClick={()=>{user.Reset();pass.Reset()}}>Reset</button>  
    </div>
    </form>
  )
}

export default Form