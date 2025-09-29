import React from 'react'
import { ADD_TO_CART } from './CartAction';

const initial={
        item:[],
        
    }
const CartReducer = (state=initial,action) => {
     switch(action.type){
        case  ADD_TO_CART:
            return{
                ...state,item:[...state.item,action.playload]
            }
        default:
            return state;
     }
  
}


export default CartReducer
