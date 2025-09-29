import React, { useState } from 'react'

const UserInput = (pername="madhu") => {
    const[data,setData]=useState();
    const handleData=(e)=>{
        setData(e.target.value);
    }
    const Reset=()=>{
setData(pername);
    }

  return {
    data,
    handleData,
    Reset
  }
}

export default UserInput