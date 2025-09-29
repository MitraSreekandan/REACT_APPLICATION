import React from 'react'

const Child = ({greet,name,age,email}) => {
  return (
    <div>
      <h1>Child Component</h1>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>email:{email}</h1>
      <button onClick={greet}>Child button</button>
    </div>
  )
}

export default Child
