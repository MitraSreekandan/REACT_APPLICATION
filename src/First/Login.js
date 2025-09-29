//register form
/*
import React, { useState } from 'react'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[emailerror,setEmailerror]=useState("");
    const[passworderror,setPassworderror]=useState("");
    const[message,setMessage]=useState("");
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage("");
        setEmailerror("");
        setPassworderror("");
        if(!email && !password){
            setMessage("Form id Empty...");
        }
        else if(!emailCheck.test(email)){
             setEmailerror("Email Must be valid");
        }
         else if(password.length<=6){
            setPassworderror("Must be 6 characters");
         }
         else{

            alert(`{Registered Successfully:${email} and ${password}`)
         }
        }

        
    
  return (
    <div>
        <h1>Registeration Form</h1>
       <form onSubmit={handleSubmit}>
      <label>email</label>
      {emailerror && <p style={{color:"red"}}>{emailerror}</p>}
      <input type="text" placeholder="Enter the Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/><br/>
      <label>Password:</label>
      {passworderror && <p style={{color:"red"}}>{passworderror }</p>}
      <input type="text" placeholder="Enter the Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}/><br/>
      {message && <p style={{color:"red"}}>{message}</p>}
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
*/
import React,{useState}from 'react'

const Login = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUsername("")
        setPassword("")
       setMessage("Loading......");

        if(username==="nitya@gmail.com" && password==="1234567"){
            setTimeout(()=>{
                setMessage("Login Successful");

            },3000);
            
        }else{
            setTimeout(()=>{
                setMessage("Login Failed");
            },3000);
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input type="text" id="username" placeholder="Enter the username" value={username}/>
        <label>Password: </label>
        <input type="text" id="password" placeholder="Enter the Password" value={password}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login