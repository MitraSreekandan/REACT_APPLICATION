// import React , { useState } from 'react'

// const Simple = () => {
//     const [input,setInput]=useState("");
//     const[update,setUpdate]=useState([]);
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(input!==""){
//             setUpdate([...update,input]);
//             setInput("");
//         }
//     }
//     const Remove=(value)=>{
//         setUpdate(update.filter((item)=>item!==value));
//     }


//   return (
//     <>
//      <div>
//       <form onSubmit={handleSubmit}>
        
//         <input type='text' placeholder='ENTER PRODUCT' value={input}
//          onChange={(e)=>setInput(e.target.value) }></input>
//          <button type='submit'>ADD</button>
//  </form>
//  </div>
//  <div>
//     <ol>
//         {
//             update.map((value,index)=>(
//                 <li key={index}>{value}
//                 <button onClick={()=>Remove(value)}>REMOVE</button></li>
//             ))
//         }
//       </ol>
//  </div>
//  </>
 
//   )
// }

// export default Simple

import React , { useState } from 'react'

const Simple = () => {
    const [input,setInput]=useState("");
    const[update,setUpdate]=useState([]);
    const[edit,setEdit]=useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        //    if(input!==""){
        //     setUpdate([...update,input]);
        //     setInput("");
        // }
        if(edit!==null){
            setUpdate(update.map((item)=>(item==edit?input:item)));
            setEdit(null);
        }else{
            setUpdate([...update,input])
        }
        setInput("");
    }
    const Remove=(value)=>{
        setUpdate(update.filter((item)=>item!==value));

    }
    const Up=(value)=>{
        setInput(value);
         setEdit(null);
    }

  return (
    <>
     <div>
      <form onSubmit={handleSubmit}>
        
        <input type='text' placeholder='ENTER PRODUCT' value={input}
         onChange={(e)=>setInput(e.target.value) }></input>
         <button type='submit'>ADD</button>
 </form>
 </div>
 <div>
    <ol>
        {
            update.map((value,index)=>(
                <li key={index}>{value}
                <button onClick={()=>Remove(value)}>REMOVE</button>
                 <button onClick={()=>Up(value)}>UPDATE</button></li>
            ))
        }
      </ol>
 </div>
 </>
 
  )
}

export default Simple

