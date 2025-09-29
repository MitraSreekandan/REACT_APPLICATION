
    export const ADD_TO_CART="ADD_TO_CART";
    export const  REMOVE_FROM_CART="REMOVE_FROM_CART"

    export const addToCart=(itemname)=>{
        return{
            type:ADD_TO_CART,
            playload:itemname
        }

    }

    export const removeFromCart=(id)=>{
        return{
            type:REMOVE_FROM_CART,
            playload:id
        }

    }
