// import React, { useReducer } from 'react'

// const  reduce=(state,action)=>{
//     switch(action.type){
//         case "Increment":
//             return state+1;
//         case "Decrement":
//             return state-1;
//         case "Reset":
//             return 0;
//         default:
//                 return state;

//     }
// }

// const Reducer = () => {
//     const[state,dispatch]=useReducer(reduce,0);
    
//   return (
//     <div>
//         <h1>{state}</h1>
//       <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
//       <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//       <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>

//     </div>
//   )
// }

// export default Reducer



import React, { useReducer } from 'react'

const  reduce=(state,action)=>{
    switch(action.type){
        case "Monday":
            return 'This is Monday';
        case "Tuesday":
            return 'This is Tuesday';
        case "Wednesday":
            return 'This is Wednesday';
            case "Thursday":
            return 'This is Thursday';
        case "Friday":
            return 'This is Friday';
        default:
                return state;

    }
}

const Reducer = () => {
    const[state,dispatch]=useReducer(reduce,0);
    
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"Monday"})}>Monday</button>
      <button onClick={()=>dispatch({type:"Tuesday"})}>Tuesday</button>
      <button onClick={()=>dispatch({type:"Wednesday"})}>wednesday</button>
      <button onClick={()=>dispatch({type:"Thursday"})}>Thursday</button>
      <button onClick={()=>dispatch({type:"Friday"})}>Friday</button>

    </div>
  )
}

export default Reducer
