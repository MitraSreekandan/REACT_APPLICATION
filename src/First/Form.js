
import React, { useState } from 'react'
//import '../First/External.css'
import style from "../First/Mod.module.css";
const Form = () => {
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
      
    <div className={style.container}>     
      <label>Username:</label>
        <input type="text" placeholder='enter the name:' value={user} 
        onChange={(e)=>setUser(e.target.value)}/> 
        <button type="submit">Submit</button> 
    </div>
    </form>
    </>
  )
}  

export default Form 

//inline
//<div style={{text-align: center;background-color:#e96d6d,padding: 20px,border-radius: 10px,}}>







