
import React, { useState } from 'react'

const Internalcss = () => {
    const[user,setUser]=useState("");
    const HandleSubmit=(e)=>{
        e.preventDefault();
        if(!user){
            console.log("username is required");
        }
        else{
        console.log(user);
        }
    }
  return (
     <>
    <form onSubmit={HandleSubmit}>

       
        <style>
            {`
            .container{
              background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;  

            }
        `}
</style> 
    <div className='container'>     
      <label>Username:</label>
        <input type="text" placeholder='enter the name:' value={user} 
        onChange={(e)=>setUser(e.target.value)}/> 
        <button type="submit">Submit</button> 
    </div>
    
    </form>
    </>
  )
}  

export default Internalcss 







