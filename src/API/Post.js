import React, { useState } from 'react'
import axios from 'axios'
const Post = () => {
    const[update,setUpdate]=useState([]);
    const[input,setInput]=useState()

    const handleGet=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/").then((result)=>{
            console.log(result.data);
            setUpdate([...result.data])
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handlePost=()=>{
        axios.post("https://jsonplaceholder.typicode.com/users/",{
        name:input,
        email:`${input}@gmail.com`
        }).then((result)=>{
            setUpdate([...update,result.data])
            setInput("");

        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleUpdate=(id,value)=>{
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{
        name:input,
        email:`${input}@gmail.com`
      }).then((result)=>{
        setUpdate([...update,result.data])
      }).catch((error)=>{
        console.log(error.message)
      })
    }
  return (
    <>    
    <div>
      <button onClick={handleGet}>GET</button>
      
        <input type='text'  value={input}
         onChange={(e)=>setInput(e.target.value) }></input>
        <button onClick={handlePost}>Post</button>
        
    </div>
    <div>
        
        <ol>
        {
            update.map((value,index)=>(
                // <li key={index}>{value.name}{".........    "}{value.email}</li>
                <li key={index}>
                    <input type="text" defaultValue={value.name}
                    onChange={(e)=>value.name=e.target.value}/>
                    {value.name}{value.email}
                    <button onClick={()=>handleUpdate(value.id,value.name)}>update</button>
                    </li>
                    
            ))
        }
      </ol>   
    </div>
    </>
  )
}

export default Post
