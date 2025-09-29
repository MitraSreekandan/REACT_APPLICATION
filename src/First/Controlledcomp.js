import React,{ useState } from 'react'

const Controlledcomp = () => {
    const[taggle,setTaggle]=useState(false);
  return (
    <div>
        <button onClick={()=>setTaggle(!taggle)}>
            {taggle?"ON":"OFF"}
        </button>
      
    </div>
  )
}

export default Controlledcomp
