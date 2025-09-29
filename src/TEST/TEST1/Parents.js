import React from 'react'
import Child from './Child'

const Parents = () => {
const handleParent=()=>{
    alert(`this is a Parent function`)
}
const handleChild=()=>{
    alert(`this is the child function`)
}
  return (
    <div>
      <h1>Parents Component</h1>
      <button onClick={handleParent}>Parent button</button>
      <Child greet={handleChild} name="Mitra" age="18" email="mitra@gmail.com"></Child>

    </div>
  )
}

export default Parents
