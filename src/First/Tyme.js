/*import React from 'react'

const Tyme = () => {
   const handleotp=()=>{
    clearTimeout(time);
        alert(`OTP is verified`);
    }
    const time=setTimeout(() => {
        console.log("otp expired");
    }, 8000);
  return (
    <div>
      <input type="text" placeholder='Enter the Name'>
      </input>
       <button onClick={handleotp}>Click</button>
    </div>
  )
}

export default Tyme
*/
/*
import React from 'react'

const Tyme = () => {
   const handleotp=()=>{
    clearTimeout(time);
        alert(`OTP is verified`);
    }
    const time=setTimeout(() => {
        console.log("OTP expired");//alert also can be used
    }, 5000);
  return (
    <div>
      <input type="text" placeholder="Enter the Name" onBlur={()=>{console.log("This is not focus input")}}
      onFocus={()=>{console.log("Focus the input")}}>
      </input>
       <button onClick={handleotp}>Submit OTP</button>
    </div>
  )
}

export default Tyme
*/
/*
import React , { useState }from 'react'

const Tyme = () => {
   const [data,setdata]=useState("")
    return (
    <div>
      <input type="text" placeholder="Enter the Name" onBlur={()=>{console.log("This is not focus input")}}
      onFocus={()=>{console.log("Focus the input")}}
      value={data}
      onChange={(e)=>setdata(e.target.value)}>
      </input>
       <p>{data}</p>
    </div>
  )
}

export default Tyme
*/
/*
import React,{useState} from 'react'

const Timeout = () => {
   const[data,setdata]=useState("");
  return (
    <div>
      <input type="text" placeholder='Enter name'
      onBlur={()=>{console.log("This is not focus input")}}
      onFocus={()=>{console.log("Focus the input")}}
      value={data}
      onChange={(e)=>setdata(e.target.value)}
     >
      </input>
    <p>{data}</p>
    </div>
  )
}

export default Timeout
*/
import React, { useState } from 'react'

const Tyme = () => {
    const[State1,setState1]=useState("");
    const[State2,setState2]=useState("");
  return (
    <div>   
      <form>
        <label htmlFor='name'>Username</label>
         <input type="text" placeholder="Enter the username"
         onChange={(e)=>setState1(e.target.value)}/> <br></br>
         <label htmlFor='name'>Password</label>
        <input type="text" placeholder="Enter the Password"
         onChange={(e)=>setState2(e.target.value)}/><br/>
         <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Tyme