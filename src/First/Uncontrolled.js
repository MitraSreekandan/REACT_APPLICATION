import React,{useRef} from 'react'

const Uncontrolled = () => {
    const UserRef=useRef(null);
    const PassRef=useRef(null);
    const handlesubmit=()=>{
       alert(`${UserRef.current.value} and ${PassRef.current.value}`)
    }
  return (
    <form onSubmit={handlesubmit}>
    <div>
      <input type="text" ref={UserRef} id='email' placeholder='enter the name'></input>
      <input type="text" ref={PassRef} id='pass' placeholder='enter the password'></input>
      <button type="submit">submit</button>
    </div>
    </form>
  )
}

export default Uncontrolled
