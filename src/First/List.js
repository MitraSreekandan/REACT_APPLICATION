import React from 'react'

const List = () => {
    const fruits=["apple","orange","pineapple","grapes","mango"];
    fruits.map((value,index)=>{

    })

  return (
    <div>
      <ol type='A'>
        {
            fruits.map((value,index)=>(
                <li key={index}>{value}</li>
            ))
        }
      </ol>
    </div>
  )
}

export default List
