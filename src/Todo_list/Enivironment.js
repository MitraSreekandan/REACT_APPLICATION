import React, { useState } from 'react'

const Enivironment = () => {
    
    const api=process.env.REACT_APP_API_KEY;
    const auth=process.env.REACT_APP_AUTH_API_KEY;
    const theme=process.env.REACT_APP_THEME;
    const[theme1,setTheme1]=useState(theme);
    const handleTheme=()=>{
        
        if(theme1=="light"){
        document.body.style.backgroundColor="yellow"
        setTheme1("dark")
        }else{
        document.body.style.backgroundColor="red"
        setTheme1("light")
        }
    }
    
  return (
    <div>
      <h1>Enivironment variable</h1>
      <p>API URL:{api}</p>
      <p>AUTH API URL:{auth}</p>
      {/* <button onClick={()=>(theme=="dark")?
        document.body.style.background="yellow":
        document.body.style.background="red"
      }>
        toggle
      </button> */}
      <button onClick={handleTheme}>toggle</button>
      
    </div>
  )
}

export default Enivironment

