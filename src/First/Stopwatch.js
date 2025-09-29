/*import React, { useRef,useState } from 'react'

const Stopwatch = () => {
    const[second,setSecond]=useState(0);
    const InputRef=useRef(null)
    const start_time=()=>{
        InputRef.current=setInterval(()=>{
            setSecond((current)=>current+1);
        },1000);
    }
    const stop_time=()=>{
        clearInterval(InputRef.current);
        //inputRef.current=null;
    }
    const reset=()=>{
        setSecond(0);
    }
  return (
    <div>
        <h1>{second}</h1>
      <button onClick={start_time} >start</button>
      <button onClick={stop_time}>stop</button>
      <button onClick={reset}>reset</button>
      
    </div>
  )
}
export default Stopwatch
*/
/*
import React,{useState,useRef} from 'react'

const Timerapp = () => {
    const [second,setSecond]=useState(0);
    const [hours,setHours]=useState(0);
    const[minute,setMinute]=useState(0);
     const InputRef=useRef("");

     const Start=()=>{
    InputRef.current= setInterval(()=>{
              setSecond(current=>current+1);
       },1000)
       InputRef.current=setInterval(()=>{
         setMinute(current=>current+1);
       },60000)
       InputRef.current=setInterval(()=>{
        setHours((current)=>current+1);
       },3600000)
     }
      const Stop=()=>{
         clearInterval(InputRef.current);
         //current process stopped
          //InputRef.current=null;
         //initialize to start 0,1,2,3,4,5,.....
      }
     const Reset=()=>{
        setSecond(0);
        setHours(0);
        setMinute(0);
      
      }
return (
    
   <div>
       <h1>{hours}:{minute}:{second}</h1>
     <button onClick={Start}>Start </button>
       <button onClick={Stop}>Stop</button>      
       <button onClick={Reset}>Reset</button>
    </div>
   )

}
 export default Timerapp
 */
/*
import React from 'react'

const Stopwatch = () => {
    const text="heyyyy guysss";
    const speak=()=>{
        const voice=new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(voice);
    }
  return (
    <div><button onClick={speak}>speak</button>
      
    </div>
  )
}

export default Stopwatch
*/