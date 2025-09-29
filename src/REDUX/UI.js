import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from './CartAction';
const UI = () => {
    const dispatch = useDispatch();
    const cartdata=useSelector((state)=>state.item);
    const Product=[
        {id:1,Productname:"car",price:10000},
        {id:2,Productname:"bike",price:1000},
        {id:3,Productname:"Mobile",price:74500},
        
]
    console.log(cartdata)
// const Add=()=>{

// }
  return (
    <>
    
        
        {    
      Product.map((value,index)=>(
        <div 
        key={index}
        style={{border:"2px solid black", width:"600px",padding:"20px",
            margin:"40px",textAlign:"center",backgroundColor:"grey"
        }} 
        >
            <h1>{value.Productname}</h1><br/>
            <button onClick={()=>dispatch(addToCart(value))}>Add to Cart</button>
        
</div>

      
      ))
      }
      
    <h1 style={{color:""}}>Carted items</h1>
    {cartdata.length>0 ?(
        <ol>{cartdata.map((value,index)=>(
          <li key={index}>{value.Productname}-{value.price}
          <button onClick={()=>dispatch(removeFromCart)} >Remove from cart</button>
          </li>
        )
      )
        }

        </ol>
    ):(<p>no items in cart</p>

    )}
    </>
  )
}

export default UI
