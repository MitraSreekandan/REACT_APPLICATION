import React from 'react'

const Child = ({greet,name,age,mobile="9361809909"}) => {
  return (
    <div>
      <h1>Child Component</h1>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Mobile no:{mobile}</h1>
      <button onClick={greet}>Child button</button>
    </div>
  )
}

export default Child
